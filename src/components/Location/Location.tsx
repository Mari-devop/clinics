import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Clinic } from '../../types';
import { Container, Buttons, Details, AboutContainer } from './Location.styled';

const libraries: ('places' | 'drawing' | 'geometry' | 'visualization')[] = ['places'];

interface LocationProps {
  clinics: Clinic[];
  selectedClinic: Clinic | null;
  selectedLocation: { lat: number; lng: number } | null;
}

const Location: React.FC<LocationProps> = ({ clinics, selectedClinic, selectedLocation }) => {
  const [activeTab, setActiveTab] = useState('map');
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyAwP2hbdwlbHxeUQJ_WCVKp7RoDzyBrmA4',
    libraries,
  });

  const mapContainerStyle = {
    height: '520px',
    width: '710px',
  };

  const defaultCenter = { lat: -25.2744, lng: 133.7751 };

  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (selectedLocation) {
      setCenter(selectedLocation);
      setZoom(14);
      if (mapRef.current) {
        mapRef.current.panTo(selectedLocation);
        mapRef.current.setZoom(14);
      }
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (selectedClinic) {
      const clinicPosition = { lat: selectedClinic.latitude, lng: selectedClinic.longitude };
      setCenter(clinicPosition);
      setZoom(14);
      if (mapRef.current) {
        mapRef.current.panTo(clinicPosition);
        mapRef.current.setZoom(14);
      }

      markersRef.current.forEach(marker => {
        const isSelected = marker.getPosition()?.lat() === clinicPosition.lat && marker.getPosition()?.lng() === clinicPosition.lng;
        marker.setIcon(isSelected ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/red-dot.png');
      });
    }
  }, [selectedClinic]);

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    if (selectedLocation) {
      map.panTo(selectedLocation);
      map.setZoom(14);
    }

    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    clinics.forEach((clinic) => {
      if (clinic.latitude && clinic.longitude) {
        console.log(`Adding marker for: ${clinic.clinicName} at ${clinic.latitude}, ${clinic.longitude}`); // Отладочное сообщение
        const marker = new google.maps.Marker({
          map,
          position: { lat: clinic.latitude, lng: clinic.longitude },
          title: clinic.clinicName,
          icon: selectedClinic && selectedClinic.slug === clinic.slug 
            ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            : 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        });
        markersRef.current.push(marker);
      }
    });
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Container>
      <Buttons>
        <button onClick={() => setActiveTab('map')}>Location</button>
        <button onClick={() => setActiveTab('about')}>About</button>
      </Buttons>
      {activeTab === 'map' ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          onLoad={onMapLoad}
        >
        </GoogleMap>
      ) : (
        selectedClinic && (
          <AboutContainer>
            <h4>{selectedClinic.clinicName}</h4>
            <p>{selectedClinic.fullAddress}</p>
            <Details>
              <p>{selectedClinic.state}</p>
              <p><a href={selectedClinic.website}>{selectedClinic.website}</a></p>
            </Details>
            <p className='about'>{selectedClinic.aboutClinic}</p>
          </AboutContainer>
        )
      )}
    </Container>
  );
};

export default Location;

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import { Clinic } from '../../types';
import { Container, Buttons } from './Location.styled';

interface LocationProps {
  clinics: Clinic[];
}

const Location: React.FC<LocationProps> = ({ clinics }) => {
  const [activeTab, setActiveTab] = useState('map');
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAwP2hbdwlbHxeUQJ_WCVKp7RoDzyBrmA4',
    libraries: ['places'],
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const mapContainerStyle = {
    height: '480px',
    width: '685px',
  };

  const center = clinics.length > 0 ? { lat: clinics[0].latitude, lng: clinics[0].longitude } : { lat: -25.2744, lng: 133.7751 };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Container>
      <Buttons>
        <button onClick={() => handleTabChange('map')}>Location</button>
        <button onClick={() => handleTabChange('description')}>About Clinic</button>
      </Buttons>
      <div>
        {activeTab === 'map' ? (
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
            {clinics.map((clinic, index) => (
              <Marker key={index} position={{ lat: clinic.latitude, lng: clinic.longitude }} />
            ))}
          </GoogleMap>
        ) : (
          <div>
            <h4>Clinic name</h4>
            <div>
              <p>City</p>
              <p>Email</p>
            </div>
            <p>VIC</p>
            <p>Description</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Location;

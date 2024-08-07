import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Search from '../../components/Search/Search';
import Filters, { FiltersType } from '../../components/Filters/Filters';
import SearchResult from '../../components/SearchResult/SearchResult';
import Location from '../../components/Location/Location';
import { Container, MainContainer } from './Home.styled';
import { Clinic } from '../../types';
import { GET_ALL_CLINICS } from '../../queries';

const Home: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_CLINICS);
  const [searchResults, setSearchResults] = useState<Clinic[]>([]);
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
  const [filters, setFilters] = useState<FiltersType>({
    city: false,
    state: false,
    zip: false,
    clinicName: false,
    suburb: false,
  });

  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (data) {
      console.log('Data loaded:', data.searchClinics); 
      setSearchResults(data.searchClinics);
    }
  }, [data]);

  const handleSearchResults = (results: Clinic[]) => {
    console.log('Search results:', results);
    setSearchResults(results);
    setSelectedClinic(null); 
    setSelectedLocation(null); 
  };

  const handleFilterChange = (newFilters: FiltersType) => {
    setFilters(newFilters);

    if (data) {
      const filtered = data.searchClinics.filter((clinic: Clinic) => {
        return (
          (!newFilters.city || clinic.city) &&
          (!newFilters.state || clinic.state) &&
          (!newFilters.zip || clinic.postcode) &&
          (!newFilters.clinicName || clinic.clinicName) &&
          (!newFilters.suburb || clinic.suburb)
        );
      });
      console.log('Filtered results:', filtered); 
      setSearchResults(filtered);
    }
  };

  const handleSelectClinic = (clinic: Clinic) => {
    console.log('Selected clinic:', clinic);
    setSelectedClinic(clinic);
    if (clinic.latitude && clinic.longitude) {
      setSelectedLocation({ lat: clinic.latitude, lng: clinic.longitude });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Search clinics={data.searchClinics} onSearch={handleSearchResults} />
      <Filters onFilterChange={handleFilterChange} />
      <MainContainer>
        <SearchResult clinics={searchResults} onSelectClinic={handleSelectClinic} />
        <Location 
          clinics={searchResults} 
          selectedClinic={selectedClinic} 
          selectedLocation={selectedLocation} 
        />
      </MainContainer>
    </Container>
  );
};

export default Home;

import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Filters, { FiltersType } from '../../components/Filters/Filters';
import SearchResult from '../../components/SearchResult/SearchResult';
import Location from '../../components/Location/Location';
import { Container, MainContainer } from './Home.styled';
import { Clinic } from '../../types';

const Home: React.FC = () => {
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

  const handleSearchResults = (results: Clinic[]) => {
    setSearchResults(results);
    setSelectedClinic(null); 
    setSelectedLocation(null); // Сбросить выбранную локацию при новом поиске
  };

  const handleFilterChange = (newFilters: FiltersType) => {
    setFilters(newFilters);
  };

  const handleSelectClinic = (clinic: Clinic) => {
    setSelectedClinic(clinic);
    if (clinic.latitude && clinic.longitude) {
      setSelectedLocation({ lat: clinic.latitude, lng: clinic.longitude });
    }
  };

  return (
    <Container>
      <Search filters={filters} onSearch={handleSearchResults} />
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

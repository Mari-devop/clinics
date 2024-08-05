import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Filters, { FiltersType } from '../../components/Filters/Filters';
import SearchResult from '../../components/SearchResult/SearchResult';
import Location from '../../components/Location/Location';
import { Container, MainContainer } from './Home.styled';
import { Clinic } from '../../types';

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Clinic[]>([]);
  const [filters, setFilters] = useState<FiltersType>({
    city: false,
    state: false,
    zip: false,
    clinicName: false,
    suburb: false,
  });

  const handleSearchResults = (results: Clinic[]) => {
    setSearchResults(results);
  };

  const handleFilterChange = (newFilters: FiltersType) => {
    setFilters(newFilters);
  };

  return (
    <Container>
      <Search filters={filters} onSearch={handleSearchResults} />
      <Filters onFilterChange={handleFilterChange} />
      <MainContainer>
        <SearchResult clinics={searchResults} />
        <Location clinics={searchResults} />
      </MainContainer>
    </Container>
  );
};

export default Home;

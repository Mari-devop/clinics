// src/components/Search/Search.tsx
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import { SEARCH_CLINICS } from '../../queries';
import { SearchComponent } from './Search.styled';
import { Clinic } from '../../types';
import { FiltersType } from '../Filters/Filters';

interface SearchProps {
  filters: FiltersType;
  onSearch: (results: Clinic[]) => void;
}

const Search: React.FC<SearchProps> = ({ filters, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [getClinics, { loading, error }] = useLazyQuery(SEARCH_CLINICS, {
    onCompleted: (data) => {
      onSearch(data.searchClinics);
    },
  });

  const handleSearch = () => {
    const searchParams = {
      clinicName: filters.clinicName ? searchInput : null,
      city: filters.city ? searchInput : null,
      state: filters.state ? searchInput : null,
      zip: filters.zip ? searchInput : null,
      suburb: filters.suburb ? searchInput : null,
    };
    getClinics({ variables: searchParams });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <SearchComponent>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon onClick={handleSearch} />
      </SearchComponent>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Search;

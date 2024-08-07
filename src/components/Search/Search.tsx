import React, { useState } from 'react';
import { Clinic } from '../../types';
import { SearchComponent } from './Search.styled';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  clinics: Clinic[];
  onSearch: (results: Clinic[]) => void;
}

const Search: React.FC<SearchProps> = ({ clinics, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const filteredClinics = clinics.filter(clinic => 
      clinic.clinicName.toLowerCase().includes(searchInput.toLowerCase()) ||
      clinic.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      clinic.state.toLowerCase().includes(searchInput.toLowerCase()) ||
      clinic.postcode.toLowerCase().includes(searchInput.toLowerCase()) ||
      clinic.suburb.toLowerCase().includes(searchInput.toLowerCase())
    );
    onSearch(filteredClinics);
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
    </div>
  );
};

export default Search;

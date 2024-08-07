// src/components/Filters/Filters.tsx
import React, { useState } from 'react';
import { FilterButtons } from './Filters.styled';

export interface FiltersType {
  city: boolean;
  state: boolean;
  zip: boolean;
  clinicName: boolean;
  suburb: boolean;
}

interface FiltersProps {
  onFilterChange: (filters: FiltersType) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FiltersType>({
    city: false,
    state: false,
    zip: false,
    clinicName: false,
    suburb: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newFilters = { ...filters, [name]: checked };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <FilterButtons>
      <div>
        <input
          name="city"
          type="checkbox"
          checked={filters.city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>
      <div>
        <input
          name="state"
          type="checkbox"
          checked={filters.state}
          onChange={handleChange}
        />
        <label htmlFor="state">State</label>
      </div>
      <div>
        <input
          name="zip"
          type="checkbox"
          checked={filters.zip}
          onChange={handleChange}
        />
        <label htmlFor="zip">ZIP</label>
      </div>
      <div>
        <input
          name="clinicName"
          type="checkbox"
          checked={filters.clinicName}
          onChange={handleChange}
        />
        <label htmlFor="clinicName">Clinic Name</label>
      </div>
      <div>
        <input
          name="suburb"
          type="checkbox"
          checked={filters.suburb}
          onChange={handleChange}
        />
        <label htmlFor="suburb">Suburb</label>
      </div>
    </FilterButtons>
  );
};

export default Filters;


import React from 'react';
import { ResultContainer, ResultItem, Details } from './SearchResult.styled';
import { Clinic } from '../../types'; 

interface SearchResultProps {
    clinics: Clinic[];
    onSelectClinic: (clinic: Clinic) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ clinics, onSelectClinic }) => {
    return (
        <ResultContainer>
            {clinics.map((clinic, index) => (
                <ResultItem key={index} onClick={() => onSelectClinic(clinic)}>
                    <h4>{clinic.clinicName}</h4>
                    <p>{clinic.fullAddress}</p>
                    <Details>
                        <p><a href={clinic.website}>{clinic.website}</a></p>
                        <p>p. {clinic.phone}</p>
                    </Details>
                </ResultItem>
            ))}
        </ResultContainer>
    );
};

export default SearchResult;
import React from 'react';
import { ResultContainer, ResultItem, Details } from './SearchResult.styled';
import { Clinic } from '../../types'; 

interface SearchResultProps {
    clinics: Clinic[];
}

const SearchResult: React.FC<SearchResultProps> = ({ clinics }) => {
    return (
        <ResultContainer>
            {clinics.map((clinic, index) => (
                <ResultItem key={index}>
                    <h4>{clinic.clinicName}</h4>
                    <p>{clinic.fullAddress}</p>
                    <Details>
                        <p><a href={clinic.website}>{clinic.website}</a></p>
                        <p>{clinic.phone}</p>
                    </Details>
                </ResultItem>
            ))}
        </ResultContainer>
    );
};

export default SearchResult;

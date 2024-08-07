// src/queries.js
import { gql } from '@apollo/client';

export const SEARCH_CLINICS = gql`
  query SearchClinics(
    $clinicName: String
    $city: String
    $state: String
    $zip: String
    $suburb: String
  ) {
    searchClinics(
      clinicName: $clinicName
      city: $city
      state: $state
      zip: $zip
      suburb: $suburb
    ) {
      slug
      website
      clinicName
      fullAddress
      city
      suburb
      state
      postcode
      email
      phone
      aboutClinic
      latitude
      longitude
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_ALL_CLINICS = gql`
  query GetAllClinics {
    searchClinics {
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

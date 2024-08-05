import { gql } from '@apollo/client';

export const SEARCH_CLINICS = gql`
  query SearchClinics($clinicName: String, $city: String, $state: String, $zip: String, $suburb: String) {
    searchClinics(clinicName: $clinicName, city: $city, state: $state, zip: $zip, suburb: $suburb) {
      longNameVersion
      typeformRegistrationLink
      pms
      metaTitle
      metaDescription
      slug
      website
      clinicName
      displayOnWeb
      linkToClinicSuburbPage
      fullAddress
      city
      suburb
      state
      postcode
      email
      phone
      latitude
      longitude
    }
  }
`;

export const GET_CITIES = gql`
  query Cities {
    cities {
      citySlug
      cityName
      state
      latitude
      longitude
    }
  }
`;

export const GET_SUBURBS = gql`
  query Suburbs {
    suburbs {
      suburbSlug
      suburbName
      city
      state
      postcode
      latitude
      longitude
    }
  }
`;

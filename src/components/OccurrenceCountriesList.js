import React from "react";
import { v4 as uuid } from 'uuid';
import OccurrenceCountryCard from "./OccurrenceCountryCard";

function OccurrenceCountriesList({ occurrenceCountries, searchCountry }) {
    const filteredSearchCountries = occurrenceCountries.filter((occurrence) => !searchCountry ? occurrenceCountries : occurrence.country.toLowerCase().includes(searchCountry.toLowerCase()));

    return (
        
        filteredSearchCountries.map(country => {
            return (<OccurrenceCountryCard key={uuid()} occurrenceCountry={country} />)
        })
    );
}

export default OccurrenceCountriesList;
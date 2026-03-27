import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    console.log(handleVisitedCountries);
    const handleVisited = () => {
        // if(visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }
        // setVisited(visited? false : true)
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Continent: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
       </div>
    );
};

export default Country;

/*

*/
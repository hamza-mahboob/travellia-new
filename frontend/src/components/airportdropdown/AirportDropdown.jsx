/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/contextAPI';

function AirportDropdown({ query, setValue }) {
    const [airports, setAirports] = useState([]);
    const { setAirportLeavingFrom } = useContext(Context);

    useEffect(() => {
        const fetchAirports = async () => {
            if (query.length > 2) {
                try {
                    const options = {
                        method: 'GET',
                        url: 'https://aerodatabox.p.rapidapi.com/airports/search/term',
                        params: {
                            q: query,
                            limit: '2'
                        },
                        headers: {
                            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
                            'x-rapidapi-host': 'YOUR_RAPIDAPI_HOST'
                        }
                    };

                    try {
                        const response = await axios.request(options);
                        // //console.log(response.data);
                        setAirports(response.data.items);
                    } catch (error) {
                        console.error(error);
                    }
                } catch (error) {
                    console.error('Error fetching airports:', error);
                }
            } else {
                setAirports([]); // Clear results if the query is too short
            }
        };

        fetchAirports();
    }, [query]);

    return (
        <div className={`absolute ${airports.length == 1 ? 'mt-20' : 'mt-40'} w-full max-w-[200px] bg-white border border-gray-300 rounded-md z-50`}>
            {airports.length > 0 ? (
                airports.map((airport) => (
                    <div
                        key={airport.iata}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                            setValue(airport.name)
                            setAirports([])
                            // //console.log(airport.name);
                        }}
                    >
                        {airport.name} ({airport.iata})
                    </div>
                ))
            ) : (
                // <div className="p-2 text-gray-500">No results found</div>
                null
            )}
        </div>
    );
}

export default AirportDropdown;

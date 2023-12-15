// FiltersContext.js
import React, { createContext, useState } from 'react';

// Create a context object
export const FiltersContext = createContext();

// This is a provider component that will wrap the part of our app that needs the filters' state
export const FiltersProvider = ({ children }) => {
    // State for all filters
    const [filters, setFilters] = useState({
        jobPosition: '',
        startDate: null,
        locationOptions: [],
        contractStatus: '',
        experience: '',
        languageOptions: [],
        skillOptions: [],
        nationalityOptions: [],
        gender: '',
        age: '',
        name: '',
    });

    // Function to update individual filter
    const setFilter = (filterName, value) => {
        setFilters(prev => ({ ...prev, [filterName]: value }));
    };

    // Function to reset all filters
    const resetFilters = () => {
        setFilters({
            jobPosition: '',
            startDate: null,
            locationOptions: [],
            contractStatus: '',
            experience: '',
            languageOptions: [],
            skillOptions: [],
            nationalityOptions: [],
            gender: '',
            age: '',
            name: '',
            // reset other filters...
        });
    };

    // The value that will be supplied to any descendants of this provider
    const contextValue = {
        filters,
        setFilter,
        resetFilters
    };

    // Return the Provider component with the state
    return (
        <FiltersContext.Provider value={contextValue}>
            {children}
        </FiltersContext.Provider>
    );
};

import React, { createContext, useState } from 'react';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        jobPosition: '',
        startDate: null,
        locationOptions: [],
        contractStatus: '',
        experience: [0, 40],
        languageOptions: [],
        skillOptions: [],
        nationalityOptions: [],
        gender: '',
        age: [18, 60],
        name: '',
    });

    const setFilter = (filterName, value) => {
        setFilters(prev => ({ ...prev, [filterName]: value }));
    };

    const resetFilters = () => {
        setFilters({
            startDate: null,
            locationOptions: [],
            contractStatus: '',
            experience: [0, 40],
            languageOptions: [],
            skillOptions: [],
            nationalityOptions: [],
            gender: '',
            age: [18, 60],
            name: '',
            // reset other filters...
        });
    };

    const contextValue = {
        filters,
        setFilter,
        resetFilters
    };

    return (
        <FiltersContext.Provider value={contextValue}>
            {children}
        </FiltersContext.Provider>
    );
};

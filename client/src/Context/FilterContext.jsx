import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filter, setfilter] = useState({
        location: '',
        jobPosition: '',
        startDate: '',
        jobType: '',
        contractStatus: '',
        postBy: '',
        language: '',
        mainSkills: '',
    });

    const setFilter = (filterName, value) => {
        setfilter(prev => ({ ...prev, [filterName]: value }));
    };

    const resetFilter = () => {
        setfilter({
            location: '',
            jobPosition: '',
            startDate: '',
            jobType: '',
            contractStatus: '',
            postBy: '',
            language: '',
            mainSkills: '',
        });
    };

    const contextValue = {
        filter,
        setFilter,
        resetFilter
    };

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    );
};

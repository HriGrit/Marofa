import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filter, setfilter] = useState({
        location: '',
        position: '',
        startDate: null,
        jobType: '',
        contractStatus: '',
        postedBy: '',
        language: '',
        mainSkill: '',
    });

    const setFilter = (filterName, value) => {
        setfilter(prev => ({ ...prev, [filterName]: value }));
    };

    const resetFilter = () => {
        setFilter({
            location: '',
            position: '',
            startDate: null,
            jobType: '',
            contractStatus: '',
            postedBy: '',
            language: '',
            mainSkill: '',
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

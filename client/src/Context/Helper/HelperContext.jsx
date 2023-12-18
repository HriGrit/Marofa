import React, { createContext, useState } from 'react';

export const HelpersContext = createContext();

export const HelperContext = ({ children }) => {
    const [helpers, setHelpers] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        religion: '',
        nationality: '',
        ethnicity: '',
        dateOfBirth: '',
        educationoLevel: [],
        countryCode: '',
        phoneNumber: 0,
        email: '',
        yearsOfExperience: 0,
        jobType: [],
        startdate: '',
        curentWorkStatus: "",
        accomodationPreference: "",
        location: "",
        languages: [],
        skills: [],
        expectedSalary: 0,
        dayOff: [],
        cookingSkills: [],
    });

    const setHelper = (helperName, value) => {
        setHelpers(prev => ({ ...prev, [helperName]: value }));
    };

    const contextValue = {
        helpers,
        setHelper,
    };

    return (
        <HelpersContext.Provider value={contextValue}>
            {children}
        </HelpersContext.Provider>
    );
};

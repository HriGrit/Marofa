import React, { createContext, useState } from 'react';

export const EmployersContext = createContext();

export const EmployerContext = ({ children }) => {
    const [employers, setEmployers] = useState({
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

    const setEmployer = (employerName, value) => {
        setEmployers(prev => ({ ...prev, [employerName]: value }));
    };

    const contextValue = {
        employers,
        setEmployer,
    };

    return (
        <EmployersContext.Provider value={contextValue}>
            {children}
        </EmployersContext.Provider>
    );
};

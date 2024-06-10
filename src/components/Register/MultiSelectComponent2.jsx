import React, { useState, useEffect } from 'react';
import Select from "react-select";

const MultiSelectComponent = ({ placeholdertext, handleChange, toggle }) => {
    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Imagin-io/country-nationality-list/master/countries.json')
            .then((response) => response.json())
            .then((data) => {
                setCountriesList(data);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, []);
    const NationalityOptions = countriesList.map(country => ({
        value: country.alpha_2_code,
        label: country.nationality,
        color: "#14415A"
    }));

    const LocationOptions = [
        { label: 'Saudi Arabia', value: 'Saudi Arabia', color: "#14415A" },
        { label: 'UAE', value: 'UAE', color: "#14415A" },
        { label: 'Qatar', value: 'Qatar', color: "#14415A" },
        { label: 'Kuwait', value: 'Kuwait', color: "#14415A" },
        { label: 'Bahrain', value: 'Bahrain', color: "#14415A" },
        { label: 'Oman', value: 'Oman', color: "#14415A" },
        { label: 'Jordan', value: 'Jordan', color: "#14415A" },
        { label: 'Lebanon', value: 'Lebanon', color: "#14415A" },
        { label: 'Egypt', value: 'Egypt', color: "#14415A" },
    ]

    const ContractOptions = [
        { label: 'Permanent', value: 'Permanent', color: "#14415A" },
        { label: 'Contract', value: 'Contract', color: "#14415A" },
        { label: 'Internship', value: 'Internship', color: "#14415A" },
    ]

    const ReligionOptions = [
        { label: 'Muslim', value: 'Muslim', color: "#14415A" },
        { label: 'Christian', value: 'Christian', color: "#14415A" },
        { label: 'Jewish', value: 'Jewish', color: "#14415A" },
        { label: 'Sikh', value: 'Sikh', color: "#14415A" },
        { label: 'Hindu', value: 'Hindu', color: "#14415A" },
    ]

    const EducationOptions = [
        { label: 'High School', value: 'High School', color: "#14415A" },
        { label: 'Diploma', value: 'Diploma', color: "#14415A" },
        { label: 'Bachelor', value: 'Bachelor', color: "#14415A" },
        { label: 'Master', value: 'Master', color: "#14415A" },
        { label: 'PhD', value: 'PhD', color: "#14415A" },
    ]

    const ExperienceOptions = [
        { label: '0-1', value: '0-1', color: "#14415A" },
        {
            label: '1-3', value: '1-3', color: "#14415A"
        },
        { label: '3-5', value: '3-5', color: "#14415A" },
        {
            label: '5+', value: '5+'
            , color: "#14415A"
        },
    ]

    const GenderOptions = [
        { label: 'Male', value: 'Male', color: "#14415A" },
        { label: 'Female', value: 'Female', color: "#14415A" },
    ]

    const AgeOptions = [
        { label: '18-25', value: '18-25', color: "#14415A" },
        { label: '26-35', value: '26-35', color: "#14415A" },
        { label: '36-45', value: '36-45', color: "#14415A" },
        { label: '46-55', value: '46-55', color: "#14415A" },
        { label: '56-65', value: '56-65', color: "#14415A" },
        { label: '65+', value: '65+', color: "#14415A" },
    ]

    let options;
    let field;
    switch (toggle) {
        case 0:
            options = LocationOptions;
            field = "Location";
            break;
        case 1:
            options = ReligionOptions;
            field = "Religion";
            break;
        case 2:
            options = NationalityOptions;
            field = "Nationality";
            break;
        case 3:
            options = ContractOptions;
            field = "Contract";
            break;
        case 4:
            options = GenderOptions;
            field = "Gender";
            break;
        case 5:
            options = AgeOptions;
            field = "Age";
            break;
        case 6:
            options = EducationOptions;
            field = "Education";
            break;
        case 7:
            options = ExperienceOptions;
            field = "Experience";
            break;
        default:
            options = [];
            field = "";
    }

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSkillsChange = (newSelectedOptions) => {
        setSelectedOptions(newSelectedOptions);
        handleChange("candidatePreferenceEmployer", field)(newSelectedOptions);
    };

    const colorStyles = {
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'black'
        }),
        placeholder: (styles) => ({
            ...styles,
            color: '#ccc',
            fontStyle: 'italic',
            padding: '8px',
            fontSize: '18px',
        }),
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: '#14415A',
            outline: 'none',
            boxShadow: 'none',
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return { ...styles, color: data.color, borderRadius: "10px" };
        },
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color: "#fff",
                borderRadius: "10px",
                fontSize: "15px",
                padding: "2px 6px",
            };
        },
        clearIndicator: (provided) => ({
            ...provided,
            color: 'black',
        }),
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: "#ffff",
            borderRadius: "10px 0 0 10px",
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: "#fff",
            cursor: "pointer",
            borderRadius: "0 10px 10px 0",
            ":hover": {
                backgroundColor: data.color,
                color: "#fff",
            },
        }),
    };

    return (
        <div className="relative inline-block w-full text-gray-700">
            <label className="block text-md font-medium text-gray-700">
                {placeholdertext}
            </label>
            <Select
                options={options}
                value={selectedOptions}
                onChange={handleSkillsChange}
                isMulti
                styles={colorStyles}
                placeholder={placeholdertext}
            />
        </div>
    );
};

export default MultiSelectComponent;

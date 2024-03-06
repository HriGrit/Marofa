import React, { useState } from 'react';
import Select from "react-select";

import { useLocationHook } from '../../hooks/useHelperHook';
import { useLanguageHooks } from '../../hooks/useHelperHook';
import { useNationalityHook } from '../../hooks/useHelperHook';
import { useSkillsHooks } from '../../hooks/useHelperHook';

const MultiSelectComponent = ({ placeholdertext, options, toggle }) => {
    const colorStyles = {
        placeholder: (styles) => ({
            ...styles,
            color: '#ccc', // Light grey color for the placeholder text.
            fontStyle: 'italic', // If you want the placeholder text to be italicized.
            padding: '6px',
            fontSize: '18px',
        }),
        // control: (styles) => ({ ...styles, backgroundColor: "white", borderRadius: "10px" }),
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: '#14415A',
            outline: 'none',  // Remove outline
            boxShadow: 'none',  // Optionally remove box-shadow if present
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
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: "#fff",
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

    if (toggle === 0) {
        const { locationOptions, setlocationOptions } = useLocationHook();

        const handleChange = (selectedOptions, { action, option }) => {
            if (action === 'select-option' && option.value === 'select-all') {
                setlocationOptions(options.slice(1)); // select all options except 'Select All'
            } else if (action === 'deselect-option' && option.value === 'select-all') {
                setlocationOptions([]); // deselect all options
            } else if (action === 'deselect-option' && selectedOptions.some(o => o.value === 'select-all')) {
                setlocationOptions(selectedOptions.filter(o => o.value !== 'select-all')); // deselect 'Select All'
            } else {
                setlocationOptions(selectedOptions); // any other selection
            }
        };

        return (
            <div className="relative inline-block w-full text-gray-700">
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholdertext}
                </label>
                <Select
                    options={options} // Use LocationsOptions for the select optionsa
                    value={locationOptions} // Use locationOptions from the hook as the value
                    onChange={handleChange}
                    isMulti
                    styles={colorStyles}
                    placeholder={placeholdertext}
                />
            </div>
        );
    } else if (toggle === 1) {
        const { languageOptions, setlanguageOptions } = useLanguageHooks();
        const LanguageOption = options;

        const handleLanguageChange = (selectedOptions, { action, option }) => {
            if (action === 'select-option' && option.value === 'select-all') {
                console.log(options.slice(1));
                setlanguageOptions(options.slice(1)); // select all options except 'Select All'
            } else if (action === 'deselect-option' && option.value === 'select-all') {
                setlanguageOptions([]); // deselect all options
            } else if (action === 'deselect-option' && selectedOptions.some(o => o.value === 'select-all')) {
                setlanguageOptions(selectedOptions.filter(o => o.value !== 'select-all')); // deselect 'Select All'
            } else {
                setlanguageOptions(selectedOptions); // any other selection
                console.log(languageOptions);
            }
        };

        return (
            <div className="relative inline-block w-full text-gray-700">
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholdertext}
                </label>
                <Select
                    options={LanguageOption}
                    value={languageOptions}
                    onChange={handleLanguageChange}
                    isMulti
                    styles={colorStyles}
                    placeholder={placeholdertext}
                />
            </div>
        );
    } else if (toggle === 2) {
        const { nationalityOptions, setNationalityOptions } = useNationalityHook();

        const handleNationalityChange = (selectedOptions, { action, option }) => {
            if (action === 'select-option' && option.value === 'select-all') {
                setNationalityOptions(options.slice(1)); // select all options except 'Select All'
            } else if (action === 'deselect-option' && option.value === 'select-all') {
                setNationalityOptions([]); // deselect all options
            } else if (action === 'deselect-option' && selectedOptions.some(o => o.value === 'select-all')) {
                setNationalityOptions(selectedOptions.filter(o => o.value !== 'select-all')); // deselect 'Select All'
            } else {
                console.log(selectedOptions);
                setNationalityOptions(selectedOptions); // any other selection
            }
        };

        return (
            <div className="relative inline-block w-full text-gray-700">
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholdertext}
                </label>
                <Select
                    options={options}
                    value={nationalityOptions}
                    onChange={handleNationalityChange}
                    isMulti
                    styles={colorStyles}
                    placeholder={placeholdertext}
                />
            </div>
        );
    } else if (toggle == 3) {
        const { skillsOptions, setskillsOptions } = useSkillsHooks();

        const handleSkillsChange = (selectedOptions, { action, option }) => {
            console.log("yes");
            if (action === 'select-option' && option.value === 'select-all') {
                setskillsOptions(options.slice(1)); // select all options except 'Select All'
            } else if (action === 'deselect-option' && option.value === 'select-all') {
                setskillsOptions([]); // deselect all options
            } else if (action === 'deselect-option' && selectedOptions.some(o => o.value === 'select-all')) {
                setskillsOptions(selectedOptions.filter(o => o.value !== 'select-all')); // deselect 'Select All'
            } else {
                setskillsOptions(selectedOptions); // any other selection
            }
        };

        return (
            <div className="relative inline-block w-full text-gray-700">
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholdertext}
                </label>
                <Select
                    options={options}
                    value={skillsOptions}
                    onChange={handleSkillsChange}
                    isMulti
                    styles={colorStyles}
                    placeholder={placeholdertext}
                />
            </div>
        );
    }
};

export default MultiSelectComponent;
import React, { useState, useEffect } from 'react';
import Select from "react-select";

const MultiSelectComponent = ({ isreset, onChangeLocation, location, placeholdertext, options }) => {
    const colorStyles = {
        placeholder: (styles) => ({
            ...styles,
            color: '#ccc', // Light grey color for the placeholder text.
            fontStyle: 'italic', // If you want the placeholder text to be italicized.
            padding: '6px',
            fontSize: '18px',
        }),
        control: (styles) => ({ ...styles, backgroundColor: "white", borderRadius: "10px" }),
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

    const handleChange = (location, { action, option }) => {
        console.log("handleChange", location, action, option);
        if (action === 'select-option' && option.value === 'select-all') {
            onChangeLocation(allOptions.slice(1)); // select all options except 'Select All'
        } else if (action === 'deselect-option' && option.value === 'select-all') {
            onChangeLocation([]); // deselect all options
        } else if (action === 'deselect-option' && location.some(o => o.value === 'select-all')) {
            onChangeLocation(location.filter(o => o.value !== 'select-all')); // deselect 'Select All'
        } else {
            onChangeLocation(location); // any other selection
        }
    };

    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };

    useEffect(() => {
        if (isreset) {
            onChangeLocation([]);
        }
    }, [isreset, onChangeLocation]);

    return (
        <div className="relative inline-block w-full text-gray-700">
            <label className="block text-sm font-medium text-gray-700" htmlFor="candidate-location">
                Candidate Location
            </label>
            <Select
                options={options} // include 'Select All' option
                value={location}
                onChange={handleChange}
                isMulti
                styles={colorStyles}
                placeholder={placeholdertext}
            />
        </div>
    );
};

export default MultiSelectComponent;
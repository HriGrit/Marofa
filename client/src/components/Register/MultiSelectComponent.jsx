import React, { useState } from 'react';
import Select from "react-select";

const MultiSelectComponent = ({ placeholdertext, options, selectedOptions, setSelectedOptions }) => {
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

    const handleSkillsChange = (newSelectedOptions, actionMeta) => {
        if (actionMeta.action === 'select-option' && actionMeta.option.value === 'select-all') {
            setSelectedOptions(options);
        } else if (actionMeta.action === 'deselect-option' && actionMeta.option.value === 'select-all') {
            setSelectedOptions([]);
        } else if (actionMeta.action === 'deselect-option' && newSelectedOptions.some(option => option.value === 'select-all')) {
            setSelectedOptions(newSelectedOptions.filter(option => option.value !== 'select-all'));
        } else {
            setSelectedOptions(newSelectedOptions);
        }
    };

    return (
        <div className="relative inline-block w-full text-gray-700">
            <label className="block text-md font-medium text-gray-700">
                {placeholdertext}
            </label>
            <Select
                options={[{ label: "Select All", value: "select-all" }, ...options]}
                value={selectedOptions}
                onChange={handleSkillsChange}
                isMulti
                styles={colorStyles}
                placeholder={placeholdertext}
            />
        </div>
    );
}


export default MultiSelectComponent
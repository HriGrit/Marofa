import React, { useState } from 'react';
import Select from "react-select";

const MultiSelectComponent = ({ placeholdertext, handleChange, toggle }) => {
    const LanguageOptions = [
        { value: "English", label: "English", color: "#14415A" },
        { value: "French", label: "French", color: "#14415A" },
        { value: "Spanish", label: "Spanish", color: "#14415A" },
    ];

    const CookingSkills = [
        { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
        { value: "Cook", label: "Cook", color: "#14415A" },
        { value: "Nanny", label: "Nanny", color: "#14415A" },
    ];

    const MainSkills = [
        { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
        { value: "Cook", label: "Cook", color: "#14415A" },
        { value: "Nanny", label: "Nanny", color: "#14415A" }
    ];

    const OtherSkills = [
        { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
        { value: "Cook", label: "Cook", color: "#14415A" },
        { value: "Nanny", label: "Nanny", color: "#14415A" }
    ];

    let options;
    let field;
    switch (toggle) {
        case 0:
            options = LanguageOptions;
            field = "languages";
            break;
        case 1:
            options = CookingSkills;
            field = "cookingSkills";
            break;
        case 2:
            options = MainSkills;
            field = "mainSkills";
            break;
        case 3:
            options = OtherSkills;
            field = "otherSkills";
            break;
        default:
            options = [];
            field = "";
    }

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSkillsChange = (newSelectedOptions) => {
        setSelectedOptions(newSelectedOptions);
        handleChange("skillsRequiredEmployer", field)(newSelectedOptions);
    };

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

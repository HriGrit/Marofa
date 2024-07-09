import React, { useState } from 'react';
import Select from "react-select";

const MultiSelectComponent = ({ placeholdertext, handleChange, toggle }) => {
    const LanguageOptions = [
        { value: "English", label: "English", color: "#14415A" },
        { value: "Cantonese", label: "Cantonese", color: "#14415A" },
        { value: "Mandarin", label: "Mandarin", color: "#14415A" },
        { value: "Arabic", label: "Arabic", color: "#14415A" },
        { value: "Japanese", label: "Japanese", color: "#14415A" },
        { value: "Filipino(Tagalog)", label: "Filipino(Tagalog)", color: "#14415A" },
        { value: "Hindi", label: "Hindi", color: "#14415A" },
        { value: "Urdu", label: "Urdu", color: "#14415A" },
        { value: "Indonesian(Bahasa)", label: "Indonesian(Bahasa)", color: "#14415A" },
        { value: "Others", label: "Others", color: "#14415A" },
    ];

    const CookingSkills = [
        { value: "Middle Eastern", label: "Middle Eastern", color: "#14415A" },
        { value: "Asian", label: "Asian", color: "#14415A" },
        { value: "Chinese", label: "Chinese", color: "#14415A" },
        { value: "French", label: "French", color: "#14415A" },
        { value: "Indian", label: "Indian", color: "#14415A" },
        { value: "Italian", label: "Italian", color: "#14415A" },
        { value: "Japanese", label: "Japanese", color: "#14415A" },
        { value: "Thai", label: "Thai", color: "#14415A" },
        { value: "Singaporean", label: "Singaporean", color: "#14415A" },
        { value: "Vegetarian", label: "Vegetarian", color: "#14415A" },
        { value: "Western", label: "Western", color: "#14415A" },
    ];

    const MainSkills = [
        { value: "Baby Care", label: "Baby Care", color: "#14415A" },
        { value: "Child Care", label: "Child Care", color: "#14415A" },
        { value: "Teen Care", label: "Teen Care", color: "#14415A" },
        { value: "Elderly Care", label: "Elderly Care", color: "#14415A" },
        { value: "Pet Care", label: "Pet Care", color: "#14415A" },
        { value: "Tutoring", label: "Tutoring", color: "#14415A" },
        { value: "Housekeeping", label: "Housekeeping", color: "#14415A" },
        { value: "Cooking", label: "Cooking", color: "#14415A" },
        { value: "Driving", label: "Driving", color: "#14415A" },
        { value: "Marketing", label: "Marketing", color: "#14415A" },
        { value: "Grocery", label: "Grocery", color: "#14415A" },
    ];

    // const PersonalitySkills = [
    //     { value: "Domestic Helper", label: "Domestic Helper", color: "#14415A" },
    //     { value: "Cook", label: "Cook", color: "#14415A" },
    //     { value: "Nanny", label: "Nanny", color: "#14415A" }
    // ];

    const OtherSkills = [
        { value: "Baking", label: "Baking", color: "#14415A" },
        { value: "Car Wash", label: "Car Wash", color: "#14415A" },
        { value: "Caregiver", label: "Caregiver", color: "#14415A" },
        { value: "Driving license", label: "Driving license", color: "#14415A" },
        { value: "Computer", label: "Computer", color: "#14415A" },
        { value: "Gardening", label: "Gardening", color: "#14415A" },
        { value: "First aid", label: "First aid", color: "#14415A" },
        { value: "Housework", label: "Housework", color: "#14415A" },
        { value: "Handyman", label: "Handyman", color: "#14415A" },
        { value: "Swimming", label: "Swimming", color: "#14415A" },
        { value: "Sewing", label: "Sewing", color: "#14415A" },
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
        case 4:
            options = PersonalitySkills;
            field = "personalitySkills";
            break;
        case 5:
            options = MainSkills;
            field = "Skills";
            break;
        default:
            options = [];
            field = "";
    }

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSkillsChange = (newSelectedOptions) => {
        setSelectedOptions(newSelectedOptions);
        if (toggle === 5) {
            handleChange("workExperienceHelper", field)(newSelectedOptions);
        } else {
            handleChange("skillsSelectedByHelper", field)(newSelectedOptions);
        }
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
      <div className="relative inline-block w-full text-gray-700 space-y-2">
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

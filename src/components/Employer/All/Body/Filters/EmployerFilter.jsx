import React from 'react'

import SliderComponent from '../../../../Filters/SliderComponent'
import FieldSelectComponent from "../../../../Filters/FieldSelectComponent";
import MultiSelectComponent from '../../../../Filters/MultiSelectComponent';

export const EmployerLanguageFilter = () => {

    const LanguageOptions = [
        { value: "select-all", label: "Select All", color: "#525252" },
        { value: "arabic", label: "Arabic", color: "#525252" },
        { value: "english", label: "English", color: "#525252" },
        { value: "hindi", label: "Hindi", color: "#525252" },
        { value: "urdu", label: "Urdu", color: "#525252" },
        { value: "tagalog", label: "Tagalog", color: "#525252" },
        { value: "bengali", label: "Bengali", color: "#525252" },
        { value: "nepali", label: "Nepali", color: "#525252" },
        { value: "sinhala", label: "Sinhala", color: "#525252" },
        { value: "amharic", label: "Amharic", color: "#525252" },
        { value: "indonesian", label: "Indonesian", color: "#525252" }
    ];

    return (
        <div>
            <MultiSelectComponent placeholdertext={"Language"} options={LanguageOptions} toggle={6} />
        </div>
    )
}

export const EmployerLocationFilter = () => {
    const LocationsOptions = [
        { value: "select-all", label: "Select All", color: "#14415A" },
        { value: "Saudi Arabia", label: "Saudi Arabia", color: "#14415A" },
        { value: "Indonesia", label: "Indonesia", color: "#14415A" },
        { value: "Malaysia", label: "Malaysia", color: "#14415A" },
        { value: "Hong Kong", label: "Hong Kong", color: "#14415A" },
        { value: "India", label: "India", color: "#14415A" },
        { value: "Kenya", label: "Kenya", color: "#14415A" },
        { value: "South Africa", label: "South Africa", color: "#14415A" },
        { value: "Sri Lanka", label: "Sri Lanka", color: "#14415A" },
        { value: "Thailand", label: "Thailand", color: "#14415A" },
        { value: "United Arab Emirates", label: "United Arab Emirates", color: "#14415A" },
        { value: "Qatar", label: "Qatar", color: "#14415A" },
        { value: "Jordan", label: "Jordan", color: "#14415A" }
    ];
    return (
        <div>
            <MultiSelectComponent placeholdertext={"Select Location"} options={LocationsOptions} toggle={4} />
        </div>
    )
}

export const EmployerSkillsFilter = () => {

    const SkillsOptions = [
        { value: "select-all", label: "Select All", color: "#14415A" },
        { value: "housekeeping", label: "Housekeeping", color: "#14415A" },
        { value: "pet-care", label: "Pet Care", color: "#14415A" },
        { value: "elderly-care", label: "Elderly Care", color: "#14415A" },
        { value: "baby-care", label: "Baby Care", color: "#14415A" },
        { value: "child-care", label: "Child Care", color: "#14415A" },
        { value: "teen-care", label: "Teen Care", color: "#14415A" },
        { value: "tutoring", label: "Tutoring", color: "#14415A" },
        { value: "cooking", label: "Cooking", color: "#14415A" },
        { value: "driving", label: "Driving", color: "#14415A" },
        { value: "laundry", label: "Laundry", color: "#14415A" },
        { value: "grocery-shopping", label: "Grocery Shopping", color: "#14415A" }
    ];

    return (
        <div>
            <MultiSelectComponent options={SkillsOptions} toggle={5} placeholdertext={"Skills"} />
        </div>
    )
}

export const EmployerPostedByFilter = () => {
    return (
        <div>
            <FieldSelectComponent placeholderText={"Posted By"} toggle={3} />
        </div>
    )
}

export const EmployerContractStatusFilter = () => {
    const ContractStatusOptions = [
        { value: "select-all", label: "Select All", color: "#14415A" },
        { value: "open", label: "Open", color: "#14415A" },
        { value: "closed", label: "Closed", color: "#14415A" },
        { value: "filled", label: "Filled", color: "#14415A" }
    ];

    return (
        <div>
            <MultiSelectComponent placeholdertext={"Contract Status"} toggle={7} options={ContractStatusOptions} />
        </div>
    )
}

export const EmployerJobTypeFilter = () => {
    return (
        <div>
            <FieldSelectComponent placeholderText={"Job Type"} toggle={5} />
        </div>
    )
}

// need work
export const EmployerStartDateFilter = () => {
    return (
        <div>
            <SliderComponent />
        </div>
    )
}

export const EmployerPositionFilter = () => {
    return (
        <div>
            <FieldSelectComponent placeholderText={"Position"} toggle={6} />
        </div>
    )
}



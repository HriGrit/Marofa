import React from 'react'

import SliderComponent from '../../../../Filters/SliderComponent'
import FieldSelectComponent from "../../../../Filters/FieldSelectComponent";
import NameComponent from '../../../../Filters/NameComponent';
import MultiSelectComponent from '../../../../Filters/MultiSelectComponent';

export const HelperLanguageFilter = () => {

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
        <div><MultiSelectComponent placeholdertext={"Language"} options={LanguageOptions} toggle={1} /></div>
    )
}

export const HelperLocationFilter = () => {
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
            <MultiSelectComponent placeholdertext={"Select Location"} options={LocationsOptions} toggle={0} />
        </div>
    )
}

export const HelperNationalityFilter = () => {

    const NationalityOptions = [
        { value: "select-all", label: "Select All", color: "#14415A" },
        { value: "Saudi Arabian", label: "Saudi Arabian", color: "#14415A" },
        { value: "Indonesian", label: "Indonesian", color: "#14415A" },
        { value: "Malaysian", label: "Malaysian", color: "#14415A" },
        { value: "Hong Kongese", label: "Hong Kongese", color: "#14415A" },
        { value: "Indian", label: "Indian", color: "#14415A" },
        { value: "Kenyan", label: "Kenyan", color: "#14415A" },
        { value: "South African", label: "South African", color: "#14415A" },
        { value: "Sri Lankan", label: "Sri Lankan", color: "#14415A" },
        { value: "Thai", label: "Thai", color: "#14415A" },
        { value: "Emirati", label: "Emirati", color: "#14415A" },
        { value: "Qatari", label: "Qatari", color: "#14415A" },
        { value: "Jordanian", label: "Jordanian", color: "#14415A" }
    ];

    return (
        <div>
            <MultiSelectComponent options={NationalityOptions} toggle={2} placeholdertext={"Nationality"} />
        </div>
    )
}

export const HelperSkillsFilter = () => {

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
            <MultiSelectComponent options={SkillsOptions} toggle={3} placeholdertext={"Skills"} />
        </div>
    )
}

export const HelperAgeFilter = () => {
    return (
        <SliderComponent placeholderText="Age" toggle={0} />
    )
}

export const HelperExperienceFilter = () => {

    return (
        <SliderComponent placeholderText="Work Experience" toggle={1} />
    );
};

export const HelperGenderFilter = () => {
    return (
        <FieldSelectComponent placeholderText={"Gender"} toggle={0} />
    )
};

export const HelperNameFilter = () => {
    return (
        <NameComponent placeholder={"Enter Name"} toggle={0} />
    );
};

export const HelperWorkTypeFilter = () => {
    return (
        <FieldSelectComponent placeholderText={"Job Type"} toggle={1} />
    )
};



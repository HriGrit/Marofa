import React from 'react'
import MultiSelectComponent from '../../../../Filters/MultiSelectComponent';

const HelperSkillsFilter = () => {

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

export default HelperSkillsFilter
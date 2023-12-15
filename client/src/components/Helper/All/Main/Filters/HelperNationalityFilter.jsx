import React from 'react'
import MultiSelectComponent from '../../../../Filters/MultiSelectComponent';

const HelperNationalityFilter = () => {

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

export default HelperNationalityFilter
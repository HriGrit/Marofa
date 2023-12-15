import React from 'react'
import MultiSelectComponent from '../../../../Filters/MultiSelectComponent'

const HelperLocationFilter = () => {
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

export default HelperLocationFilter
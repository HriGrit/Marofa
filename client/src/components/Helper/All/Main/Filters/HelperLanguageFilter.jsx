import React from 'react'
import MultiSelectComponent from '../../../../Filters/MultiSelectComponent';

const HelperLanguageFilter = () => {

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

export default HelperLanguageFilter
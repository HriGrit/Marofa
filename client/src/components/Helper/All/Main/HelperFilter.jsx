import React, { useState } from 'react';
import reload from '../../../../assets/reload.svg';
import DateComponent from './DateComponent';
import HrLine from './HrLine';
import MultiSelectComponent from './MultiSelectComponent';

const HelperFilter = () => {
    const [startDate, setStartDate] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [reset, setReset] = useState(false);

    const handleOnReset = () => {
        setReset(!reset);
    }

    const LocationOptions = [
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
        <div className='bg-red-200 w-1/5 p-4'>
            <div className='space-y-2'>
                <p>I am looking for</p>
                <div className='flex flex-row justify-between'>
                    <p>Filter</p>
                    <button className='flex flex-row items-center' onClick={handleOnReset}>
                        <img src={reload} alt='reload' className='w-4 h-4 mr-1' />
                        <p className=''>Reset</p>
                    </button>
                </div>
                <div>
                    <DateComponent onChangeDate={setStartDate} date={startDate} isreset={reset} placeholderText={"Start Date"} />
                </div>
                <div>
                    <MultiSelectComponent onChangeLocation={setSelectedOptions} location={selectedOptions} isreset={reset} placeholdertext={"Select Location"} options={LocationOptions} />
                </div>
                <div>
                    <HrLine />
                </div>
            </div>
        </div>
    );
};

export default HelperFilter;

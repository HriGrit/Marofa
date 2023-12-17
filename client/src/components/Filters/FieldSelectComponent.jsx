import React from 'react'

import useWorkTypeHook from '../../hooks/useWorkTypeHook';
import useGenderHook from '../../hooks/useGenderHook';

import HrLine from './HrLine';

const FieldSelectComponent = ({ placeholderText, toggle }) => {
    if (toggle) {
        const { jobType, setJobType } = useWorkTypeHook();

        const handleJobTypeChange = (event) => {
            setJobType(event.target.value);
        };
        const options = ['Full Time', 'Part Time', 'Temporary'];
        return (
            <>
                <label className="block text-md font-medium text-gray-700" htmlFor={placeholderText}>
                    {placeholderText}
                </label>
                <HrLine />
                <div className="ml-4 mt-2">
                    {options.map((option) => (
                        <label className="block" key={option}>
                            <input
                                type="radio"
                                value={option}
                                checked={jobType === option}
                                onChange={handleJobTypeChange}
                                className="form-radio"
                            />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            </>
        );
    } else {
        const { gender, setgender } = useGenderHook();

        const handleGenderChange = (event) => {
            setgender(event.target.value);
        };
        const GenderOptions = ["Male", "Female"];
        return (
            <>
                <label className="block text-md font-medium text-gray-700" htmlFor={placeholderText}>
                    {placeholderText}
                </label>
                <HrLine />
                <div className="ml-4 mt-2">
                    {GenderOptions.map((option) => (
                        <label className="block" key={option}>
                            <input
                                type="radio"
                                value={option}
                                checked={gender === option}
                                onChange={handleGenderChange}
                                className="form-radio"
                            />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            </>
        );
    }
}

export default FieldSelectComponent
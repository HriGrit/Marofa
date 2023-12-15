import React from 'react';

import useWorkTypeHook from '../hooks/useWorkTypeHook';
import HrLine from '../../../../Filters/HrLine';

const HelperWorkTypeFilter = ({ placeholderText }) => {
    const { jobType, setJobType } = useWorkTypeHook();

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    return (
        <>
            <label className="block text-sm font-medium text-gray-700" htmlFor={placeholderText}>
                {placeholderText}
            </label>
            <HrLine />
            <div className="ml-4">
                <label className="block">
                    <input
                        type="radio"
                        value="Full Time"
                        checked={jobType === 'Full Time'}
                        onChange={handleJobTypeChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Full Time</span>
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value="Part Time"
                        checked={jobType === 'Part Time'}
                        onChange={handleJobTypeChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Part Time</span>
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value="Temporary"
                        checked={jobType === 'Temporary'}
                        onChange={handleJobTypeChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Temporary</span>
                </label>
            </div>
        </>
    );
};

export default HelperWorkTypeFilter;

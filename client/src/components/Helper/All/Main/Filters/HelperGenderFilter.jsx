import React from 'react';

import useGenderHook from '../hooks/useGenderHook'; // Make sure to create this hook
import HrLine from '../../../../Filters/HrLine';

const HelperGenderFilter = () => {
    const { gender, setGender } = useGenderHook(); // This hook will manage the gender state

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <label className="block text-sm font-medium text-gray-700" htmlFor="gender">
                Gender
            </label>
            <HrLine />
            <div className="ml-4">
                <label className="block">
                    <input
                        type="radio"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={handleGenderChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Male</span>
                </label>
                <label className="block">
                    <input
                        type="radio"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={handleGenderChange}
                        className="form-radio"
                    />
                    <span className="ml-2">Female</span>
                </label>
            </div>
        </>
    );
};

export default HelperGenderFilter;

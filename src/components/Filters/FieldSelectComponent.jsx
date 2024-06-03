import React from 'react'

import { useWorkTypeHook, useGenderHook } from '../../hooks/useHelperHook';
import { usePostedByHook, useContractStatusHook, useJobTypeHook, usePositionHook } from '../../hooks/useEmployerHook';

import HrLine from './HrLine';

const FieldSelectComponent = ({ placeholderText, toggle }) => {
    if (toggle == 1) {
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
    } else if (toggle == 2) {
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
    } else if (toggle == 3) {
        const { postBy, setPostBy } = usePostedByHook();

        const handlePostedByChange = (event) => {
            console.log(postBy, event.target.value);
            setPostBy(event.target.value);
        };
        const PostedByOptions = ["Agency", "Employer"];
        return (
            <>
                <label className="block text-md font-medium text-gray-700" htmlFor={placeholderText}>
                    {placeholderText}
                </label>
                <HrLine />
                <div className="ml-4 mt-2">
                    {PostedByOptions.map((option) => (
                        <label className="block" key={option}>
                            <input
                                type="radio"
                                value={option}
                                checked={postBy === option}
                                onChange={handlePostedByChange}
                                className="form-radio"
                            />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            </>
        );
    } else if (toggle == 4) {
        const { contractStatus, setContractStatus } = useContractStatusHook();

        const handleContractStatusChange = (event) => {
            setContractStatus(event.target.value);
        };
        const ContractStatusOptions = ["Open", "Closed"];
        return (
            <>
                <label className="block text-md font-medium text-gray-700" htmlFor={placeholderText}>
                    {placeholderText}
                </label>
                <HrLine />
                <div className="ml-4 mt-2">
                    {ContractStatusOptions.map((option) => (
                        <label className="block" key={option}>
                            <input
                                type="radio"
                                value={option}
                                checked={contractStatus === option}
                                onChange={handleContractStatusChange}
                                className="form-radio"
                            />
                            <span className="ml-2">{option}</span>
                        </label>
                    ))}
                </div>
            </>
        );
    } else if (toggle == 5) {
        const { jobType, setJobType } = useJobTypeHook();

        const handleJobTypeChange = (event) => {
            setJobType(event.target.value);
        };
        const JobTypeOptions = ["Full Time", "Part Time"];
        return (
            <>
                <label className="block text-md font-medium text-gray-700" htmlFor={placeholderText}>
                    {placeholderText}
                </label>
                <HrLine />
                <div className="ml-4 mt-2">
                    {JobTypeOptions.map((option) => (
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
    } else if (toggle == 6) {
        const { jobPosition, setPosition } = usePositionHook();

        const handlePositionChange = (event) => {
            setPosition(event.target.value);
        };
        const PositionOptions = ["Full Time", "Part Time"];
        return (
            <>
                <label className="block text-md font-medium text-gray-700" htmlFor={placeholderText}>
                    {placeholderText}
                </label>
                <HrLine />
                <div className="ml-4 mt-2">
                    {PositionOptions.map((option) => (
                        <label className="block" key={option}>
                            <input
                                type="radio"
                                value={option}
                                checked={jobPosition === option}
                                onChange={handlePositionChange}
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
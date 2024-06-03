import React from 'react'
import ReactSlider from 'react-slider';

import { useExperienceHooks } from '../../hooks/useHelperHook'
import { useAgeHook } from '../../hooks/useHelperHook';

import "../../css/SliderComponent.css"

import HrLine from './HrLine';

const SliderComponent = ({ placeholderText, toggle }) => {

    if (toggle) {
        const { experience, setExperience } = useExperienceHooks();

        const handleExperienceChange = (event) => {
            setExperience(event);
        };

        return (
            <div className='relative z-0 mb-6'>
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholderText}
                </label>
                <HrLine />
                <div className='mt-8'>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        value={experience}
                        min={0}
                        max={40}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => (
                            <div {...props}>{state.valueNow}</div>
                        )}
                        renderTrack={(props, state) => {
                            let trackClassName = "example-track";
                            if (state.index === 1) {
                                // Track between the thumbs
                                trackClassName += " bg-custom-blue";
                            } else {
                                // Track outside the thumbs
                                trackClassName += " bg-gray-300";
                            }
                            return <div {...props} className={trackClassName}></div>;
                        }}
                        onChange={handleExperienceChange}
                        pearling
                        minDistance={7}
                    />
                </div>
            </div>
        );
    } else {
        const { age, setAge } = useAgeHook();

        const handleAgeChange = (event) => {
            setAge(event);
        };

        return (
            <div className='relative z-0 mb-6'>
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholderText}
                </label>
                <HrLine />
                <div className='mt-8'>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        value={age}
                        min={18}
                        max={60}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => (
                            <div {...props}>{state.valueNow}</div>
                        )}
                        renderTrack={(props, state) => {
                            let trackClassName = "example-track";
                            if (state.index === 1) {
                                // Track between the thumbs
                                trackClassName += " bg-custom-blue";
                            } else {
                                // Track outside the thumbs
                                trackClassName += " bg-gray-300";
                            }
                            return <div {...props} className={trackClassName}></div>;
                        }}
                        onChange={handleAgeChange}
                        pearling
                        minDistance={7}
                    />
                </div>
            </div>
        );
    }
}

export default SliderComponent
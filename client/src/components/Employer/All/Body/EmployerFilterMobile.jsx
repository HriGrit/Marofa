import React, { useContext } from 'react';

import DateComponent from '../../../Filters/DateComponent';
import { FilterContext } from '../../../../Context/FilterContext';

import reload from '../../../../assets/reload.svg';

import {
    EmployerLanguageFilter,
    EmployerLocationFilter,
    EmployerSkillsFilter,
    EmployerPostedByFilter,
    EmployerContractStatusFilter,
    EmployerJobTypeFilter,
    EmployerStartDateFilter,
    EmployerPositionFilter
} from './Filters/EmployerFilter';

import cancel from '../../../../assets/cancel.svg';
import "../../../../css/HelperFilterMobile.css"

const EmployerFilterMobile = ({ setisPopUpOpen }) => {
    const { resetFilter } = useContext(FilterContext);

    const handleOnReset = () => {
        resetFilter();
    }

    const handleOnBackgroundClick = () => {
        setisPopUpOpen(false);
    }

    return (
        <div className='fixed p-4 border border-theme shadow-lg rounded-md inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 py-6' onClick={handleOnBackgroundClick}>
            <div className='relative space-y-2 bg-white p-6 rounded-2xl shadow-lg w-3/4 max-h-[90vh] overflow-y-auto overflow-x-hidden border-4 border-theme hide-scrollbar' onClick={(e) => e.stopPropagation()}>
                <div>
                    <img src={cancel} alt='cancel' className='absolute right-4 w-7 h-7 cursor-pointer' onClick={handleOnBackgroundClick} />
                </div>
                <p className='text-2xl my-4'>I'm looking for</p>
                <div className='flex flex-row justify-between'>
                    <p className='text-xl'>Filter</p>
                    <div className='flex flex-row items-center space-x-2 cursor-pointer' onClick={handleOnReset}>
                        <img src={reload} alt='reload' className='w-5 h-5' />
                        <p className='text-lg'>Reset</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div>
                        <EmployerPostedByFilter />
                    </div>
                    <div>
                        <EmployerContractStatusFilter />
                    </div>
                    <div>
                        <EmployerJobTypeFilter />
                    </div>
                    <div>
                        <EmployerPositionFilter />
                    </div>
                    <div>
                        <EmployerLocationFilter />
                    </div>
                    <div>
                        <EmployerSkillsFilter />
                    </div>
                    <div>
                        <EmployerLanguageFilter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerFilterMobile;

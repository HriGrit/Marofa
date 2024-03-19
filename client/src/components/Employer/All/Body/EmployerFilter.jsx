import React, { useContext } from 'react';

// import DateComponent from '../../../Filters/DateComponent';
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

const EmployerFilter = () => {
    // const { resetFilter } = useContext(FiltersContext);
    const { filter, resetFilter } = useContext(FilterContext);
    const handleOnReset = () => {
        console.log('resetting filter');
        resetFilter();
        console.log(filter);
    }

    return (
        <div className='hidden app:block w-[30%] p-4 ml-16 border border-theme shadow-lg bg-[#f6f6f6] rounded-md'>
            <div className='space-y-2'>
                <p className='text-2xl my-4'>I'm looking for</p>
                <div className='flex flex-row justify-between'>
                    <p className='text-xl'>Filter</p>
                    <div className='flex flex-row items-center space-x-2 cursor-pointer' onClick={handleOnReset}>
                        <img src={reload} alt='reload' className='w-5 h-5' />
                        <p className='text-lg'>Reset</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    {/* need to look into this */}
                    {/* <div>
                        <DateComponent placeholderText={"Start Date"} />
                    </div> */}
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
                    {/* 
                    <div>
                        <EmployerStartDateFilter />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EmployerFilter;

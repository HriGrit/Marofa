import React, { useContext } from 'react';

import DateComponent from '../../../Filters/DateComponent';
import { FiltersContext } from '../../../../Context/FiltersContext';

import reload from '../../../../assets/reload.svg';

import { HelperNameFilter, HelperAgeFilter, HelperExperienceFilter, HelperGenderFilter, HelperWorkTypeFilter, HelperLanguageFilter, HelperLocationFilter, HelperNationalityFilter, HelperSkillsFilter } from './Filters/HelperFilter';

const HelperFilter = () => {
    const { resetFilters } = useContext(FiltersContext);

    const handleOnReset = () => {
        resetFilters();
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
                    <div>
                        <HelperWorkTypeFilter placeholderText={"Job Type"} />
                    </div>
                    <div>
                        <DateComponent placeholderText={"Start Date"} />
                    </div>
                    <div>
                        <HelperGenderFilter />
                    </div>
                    <div>
                        <HelperLocationFilter />
                    </div>
                    <div>
                        <HelperSkillsFilter />
                    </div>
                    <div>
                        <HelperAgeFilter />
                    </div>
                    <div>
                        <HelperLanguageFilter />
                    </div>
                    <div>
                        <HelperNationalityFilter />
                    </div>
                    <div>
                        <HelperExperienceFilter />
                    </div>
                    <div>
                        <HelperNameFilter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelperFilter;

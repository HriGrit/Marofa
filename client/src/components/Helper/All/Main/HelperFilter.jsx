import React, { useContext } from 'react';

import DateComponent from '../../../Filters/DateComponent';
import { FiltersContext } from './Context/FiltersContext';

import reload from '../../../../assets/reload.svg';
import WorkType from './Filters/HelperWorkTypeFilter';

import HelperLocationFilter from './Filters/HelperLocationFilter';
import HelperLanguageFilter from './Filters/HelperLanguageFilter';
import HelperNationalityFilter from './Filters/HelperNationalityFilter';
import HelperSkillsFilter from './Filters/HelperSkillsFilter';
import HelperExperienceFilter from './Filters/HelperExperienceFilter';

const HelperFilter = () => {
    const { resetFilters } = useContext(FiltersContext);

    const handleOnReset = () => {
        resetFilters();
    }

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
                    <WorkType placeholderText={"Job Type"} />
                </div>
                <div>
                    <DateComponent placeholderText={"Start Date"} />
                </div>
                <div>
                    <HelperLocationFilter />
                </div>
                <div>
                    <HelperLanguageFilter />
                </div>
                <div>
                    <HelperNationalityFilter />
                </div>
                <div>
                    <HelperSkillsFilter />
                </div>
                <div>
                    <HelperExperienceFilter />
                </div>
            </div>
        </div>
    );
};

export default HelperFilter;

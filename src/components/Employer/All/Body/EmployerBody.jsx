import React, { useState } from 'react'
import OrderEmployers from './OrderEmployers';
import EmployerFilter from './EmployerFilter';
import EmployerList from '../Card/EmployerList';

import { FilterProvider } from '../../../../Context/FilterContext';
import FilterEmployers from './FilterEmployers';
const EmployerFilterMobile = React.lazy(() => import('./EmployerFilterMobile'));

const EmployerBody = () => {
    const [sortBy, setsortBy] = useState([]);
    const [ispopUpOpen, setisPopUpOpen] = useState(false);

    return (
        <div className='mt-4'>
            <div className='flex justify-between app:justify-end space-x-4 app:space-x-0  mx-16'>
                <div className='block app:hidden'>
                    <FilterEmployers setisPopUpOpen={setisPopUpOpen} ispopUpOpen={ispopUpOpen} />
                </div>
                <OrderEmployers onSortChange={setsortBy} />
            </div>
            <div className='flex flex-row gap-6 mt-4'>
                <FilterProvider>
                    <EmployerFilter />
                </FilterProvider>
                <EmployerList />
            </div>
            {ispopUpOpen &&
                <FilterProvider>
                    <EmployerFilterMobile setisPopUpOpen={setisPopUpOpen} />
                </FilterProvider>}
        </div>
    )
}

export default EmployerBody
import React, { useState } from 'react'
import OrderHelpers from './OrderHelpers';
import HelperFilter from './HelperFilter';
import HelperList from './HelperList';

import { FiltersProvider } from '../../../../Context/FiltersContext';
import FilterHelpers from './FilterHelpers';
const HelperFilterMobile = React.lazy(() => import('./HelperFilterMobile'));

const HelperBody = () => {
    const [sortBy, setsortBy] = useState([]);
    const [ispopUpOpen, setisPopUpOpen] = useState(false);

    return (
        <div className='mt-4'>
            <div className='flex justify-between app:justify-end space-x-4 app:space-x-0'>
                <div className='block app:hidden'>
                    <FilterHelpers setisPopUpOpen={setisPopUpOpen} ispopUpOpen={ispopUpOpen} />
                </div>
                <OrderHelpers onSortChange={setsortBy} />
            </div>
            <div className='flex flex-row gap-6 mt-4'>
                <FiltersProvider>
                    <HelperFilter />
                </FiltersProvider>
                <HelperList />
            </div>
            {ispopUpOpen &&
                <FiltersProvider>
                    <HelperFilterMobile setisPopUpOpen={setisPopUpOpen} />
                </FiltersProvider>}
        </div>
    )
}

export default HelperBody
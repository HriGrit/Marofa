import React, { useState } from 'react'
import OrderHelpers from './OrderHelpers';
import HelperFilter from './HelperFilter';
import HelperList from './HelperList';

import { FiltersProvider } from './Context/FiltersContext';

const HelperBody = () => {
    // receive full helpers array
    const [helpers, sethelpers] = useState([]);
    const [filters, setfilters] = useState([]);
    const [sortBy, setsortBy] = useState([]);

    return (
        <div className='mt-4'>
            <div className='flex justify-end'>
                <OrderHelpers onSortChange={setsortBy} />
            </div>
            <div className='flex flex-row'>
                <FiltersProvider>
                    <HelperFilter onFilterChange={setfilters} />
                </FiltersProvider>
                <HelperList />
            </div>
        </div>
    )
}

export default HelperBody
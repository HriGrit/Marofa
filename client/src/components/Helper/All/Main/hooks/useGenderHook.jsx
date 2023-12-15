import React, { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

const useGenderHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        gender: filters.gender,
        setgender: (value) => setFilter('gender', value),
    }
}

export default useGenderHooks
import React, { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

const useExperienceHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        experience: filters.experience,
        setexperience: (value) => setFilter('experience', value),
    }
}

export default useExperienceHooks
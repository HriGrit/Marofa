import React, { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

const useSkillsHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        skillsOptions: filters.skillOptions,
        setskillsOptions: (value) => setFilter('skillOptions', value),
    }
}

export default useSkillsHooks
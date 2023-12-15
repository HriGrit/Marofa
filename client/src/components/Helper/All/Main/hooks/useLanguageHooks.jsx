import React, { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

const useLanguageHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        languageOptions: filters.languageOptions,
        setlanguageOptions: (value) => setFilter('languageOptions', value),
    }
}

export default useLanguageHooks
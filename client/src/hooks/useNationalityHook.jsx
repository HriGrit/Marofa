import { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

const useNationalityHook = () => {
    const { filters, setFilter } = useContext(FiltersContext)

    return {
        nationalityOptions: filters.nationalityOptions,
        setNationalityOptions: (value) => setFilter('nationalityOptions', value),
    };
}

export default useNationalityHook
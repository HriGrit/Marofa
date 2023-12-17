import { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

const useAgeHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        age: filters.age,
        setAge: (event) => setFilter('age', event),
    }
}

export default useAgeHook
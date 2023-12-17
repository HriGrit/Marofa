import { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext';

const useWorkTypeHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);

    return {
        jobType: filters.jobType,
        setJobType: (value) => setFilter('jobType', value),
    };
}

export default useWorkTypeHook
import { useContext } from 'react';
import { FiltersContext } from '../Context/FiltersContext';

const useDateHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);

    return {
        startDate: filters.startDate,
        setStartDate: (value) => setFilter('startDate', value),
    };
}

export default useDateHook;
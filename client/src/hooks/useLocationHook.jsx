import { useContext } from 'react';
import { FiltersContext } from '../Context/FiltersContext';

const useLocationHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        locationOptions: filters.locationOptions,
        setlocationOptions: (value) => setFilter('locationOptions', value),
    };
}

export default useLocationHook;
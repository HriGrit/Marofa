import { useContext } from "react"

import { FiltersContext } from "../Context/FiltersContext"

const useNameHook = () => {
    const { filters, setFilter } = useContext(FiltersContext)
    return {
        name: filters.name,
        setName: (value) => setFilter('name', value)
    }
}

export default useNameHook
import { useContext } from 'react'

import { FiltersContext } from '../Context/FiltersContext'

export const useAgeHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        age: filters.age,
        setAge: (event) => setFilter('age', event),
    }
}

export const useLocationHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        locationOptions: filters.locationOptions,
        setlocationOptions: (value) => setFilter('locationOptions', value),
    };
}

export const useDateHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);

    return {
        startDate: filters.startDate,
        setStartDate: (value) => setFilter('startDate', value),
    };
}

export const useExperienceHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);

    return {
        experience: filters.experience,
        setExperience: (value) => setFilter('experience', value),
    }
}

export const useLanguageHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        languageOptions: filters.languageOptions,
        setlanguageOptions: (value) => setFilter('languageOptions', value),
    }
}

export const useNameHook = () => {
    const { filters, setFilter } = useContext(FiltersContext)
    return {
        name: filters.name,
        setName: (value) => setFilter('name', value)
    }
}

export const useNationalityHook = () => {
    const { filters, setFilter } = useContext(FiltersContext)

    return {
        nationalityOptions: filters.nationalityOptions,
        setNationalityOptions: (value) => setFilter('nationalityOptions', value),
    };
}

export const useSkillsHooks = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        skillsOptions: filters.skillOptions,
        setskillsOptions: (value) => setFilter('skillOptions', value),
    }
}

export const useWorkTypeHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);

    return {
        jobType: filters.jobType,
        setJobType: (value) => setFilter('jobType', value),
    };
}

export const useGenderHook = () => {
    const { filters, setFilter } = useContext(FiltersContext);
    return {
        gender: filters.gender,
        setgender: (value) => setFilter('gender', value),
    }
}
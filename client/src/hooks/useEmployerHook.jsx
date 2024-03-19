import { useContext } from 'react'

import { FilterContext } from '../Context/FilterContext'

export const useLocationHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        location: filter.location,
        setLocation: (event) => setFilter('location', event),
    }
}

export const usePositionHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        jobPosition: filter.jobPosition,
        setPosition: (event) => setFilter('jobPosition', event),
    }
}

export const useStartDateHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        startDate: filter.startDate,
        setStartDate: (event) => setFilter('startDate', event),
    }
}

export const useJobTypeHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        jobType: filter.jobType,
        setJobType: (event) => setFilter('jobType', event),
    }
}

export const useContractStatusHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        contractStatus: filter.contractStatus,
        setContractStatus: (event) => setFilter('contractStatus', event),
    }
}

export const usePostedByHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        postBy: filter.postBy,
        setPostBy: (event) => setFilter('postBy', event),
    }
}

export const useLanguageHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        language: filter.language,
        setLanguage: (event) => setFilter('language', event),
    }
}

export const useMainSkillHook = () => {
    const { filter, setFilter } = useContext(FilterContext);
    return {
        mainSkills: filter.mainSkills,
        setMainSkill: (event) => setFilter('mainSkills', event),
    }
}
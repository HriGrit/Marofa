import { useContext } from 'react'

import { FilterContext } from '../Context/FilterContext'

const useLocationHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        age: filters.location,
        setLocation: (event) => setFilter('location', event),
    }
}

const usePositionHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        position: filters.position,
        setPosition: (event) => setFilter('position', event),
    }
}

const useStartDateHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        startDate: filters.startDate,
        setStartDate: (event) => setFilter('startDate', event),
    }
}

const useJobTypeHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        jobType: filters.jobType,
        setJobType: (event) => setFilter('jobType', event),
    }
}

const useContractStatusHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        contractStatus: filters.contractStatus,
        setContractStatus: (event) => setFilter('contractStatus', event),
    }
}

const usePostedByHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        postedBy: filters.postedBy,
        setPostedBy: (event) => setFilter('postedBy', event),
    }
}

const useLanguageHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        language: filters.language,
        setLanguage: (event) => setFilter('language', event),
    }
}

const useMainSkillHook = () => {
    const { filters, setFilter } = useContext(FilterContext);
    return {
        mainSkill: filters.mainSkill,
        setMainSkill: (event) => setFilter('mainSkill', event),
    }
}

export default { useContractStatusHook, useJobTypeHook, useLanguageHook, useLocationHook, useMainSkillHook, usePostedByHook, usePositionHook, useStartDateHook }
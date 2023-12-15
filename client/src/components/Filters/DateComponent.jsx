import React, { useEffect } from 'react'

import DatePicker from 'react-datepicker'
import { getMonth, getYear } from 'date-fns'

import './css/DateComponent.css'
import 'react-datepicker/dist/react-datepicker.css'

import useDateHook from '../Helper/All/Main/hooks/useDateHook'

const DateComponent = ({ placeholderText }) => {
    const { startDate, setStartDate, resetStartDate } = useDateHook();

    const getYearRange = (start, end) => {
        const years = [];
        for (let year = start; year <= end; year++) {
            years.push(year);
        }
        return years;
    };

    const currentYear = new Date().getFullYear();
    const years = getYearRange(2020, currentYear + 5);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    useEffect(() => {
        if (resetStartDate) {
            setStartDate(null);
        }
    }, [setStartDate, resetStartDate]);

    return (
        <div className="relative inline-block w-full text-gray-700">
            <label className="block text-sm font-medium text-gray-700" htmlFor={placeholderText}>
                {placeholderText}
            </label>
            <DatePicker
                wrapperClassName="react-datepicker"
                className='p-1'
                isClearable
                placeholderText='dd-mm-yyyy'
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div
                        className='flex flex-row justify-evenly items-center space-x-4 text-lg'
                    >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className='text-xl'>
                            {"<"}
                        </button>
                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                            className=' bg-inherit outline-none appearance-none px-0.25'
                        >
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                            }
                            className=' outline-none appearance-none bg-inherit text-center'
                        >
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className='text-xl'>
                            {">"}
                        </button>
                    </div>
                )}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </div>
    )
}

export default DateComponent

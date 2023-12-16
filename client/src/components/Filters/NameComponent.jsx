import React from 'react'

import useNameHook from '../Helper/All/Main/hooks/useNameHook';

const NameComponent = ({ placeholder, toggle }) => {
    if (!toggle) {
        const { name, setName } = useNameHook();

        const handleNameChange = (e) => {
            const name = e.target.value;
            console.log(name);
            setName(name);
        }
        console.log(name);
        return (
            <div className=''>
                <label className="block text-md font-medium text-gray-700" htmlFor="candidate-location">
                    {placeholder}
                </label>
                <div className="flex">
                    <input
                        type="text"
                        value={name}
                        placeholder={placeholder}
                        className="px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 w-full"
                        onChange={handleNameChange}
                    />
                </div>
            </div>
        )
    }
}

export default NameComponent
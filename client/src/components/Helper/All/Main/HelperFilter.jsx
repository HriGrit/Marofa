import React, { useState } from 'react';
import reload from '../../../../assets/reload.svg';

const HelperFilter = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className='bg-red-200 w-1/5 p-4'>
            <div>
                <p>I am looking for</p>
                <div className='flex flex-row justify-between'>
                    <p>Filter</p>
                    <button className='flex flex-row items-center'>
                        <img src={reload} alt='reload' className='w-4 h-4 mr-1' />
                        <p>Reset</p>
                    </button>
                </div>
                <div>
                    <input
                        type='date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default HelperFilter;

import React from 'react';

const FilterHelpers = ({ setisPopUpOpen, ispopUpOpen }) => {

    const handleOnClick = () => {
        setisPopUpOpen(!ispopUpOpen);
    };

    return (
        <div className='flex flex-row gap-4 items-center cursor-pointer' style={{ height: '40px' }} onClick={handleOnClick}>
            <p className='bg-theme text-white p-1.5 text-xl font-normal rounded-md'>Filter</p>
        </div>
    );
};

export default FilterHelpers;
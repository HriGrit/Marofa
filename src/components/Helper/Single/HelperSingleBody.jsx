import React from 'react'

import HelperCardSingle from './HelperCardSingle';
import HelperSideBar from './HelperSideBar';

const HelperSingleBody = ({ helperId }) => {
    return (
        <div className='sm:m-16 sm:mx-32 grid grid-cols-12'>
            <div className='col-span-12'>
                <HelperCardSingle helperId={helperId} />
            </div>
            {/* <div className='col-span-2'>
                <HelperSideBar />
            </div> */}
        </div>
    )
}

export default HelperSingleBody
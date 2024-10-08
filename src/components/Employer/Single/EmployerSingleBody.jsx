import React from 'react'
import EmployerCardSingle from './EmployerCardSingle'
import EmployerSingleSidebar from './EmployerSingleSidebar'

const EmployerSingleBody = ({ employerId }) => {
    return (
        <div className='sm:m-16 sm:mx-32 grid grid-cols-12'>
            <div className='col-span-12'>
                <EmployerCardSingle employerId={employerId} />
            </div>
            {/* <div className='col-span-2'>
                <EmployerSingleSidebar employerId={employerId} />
            </div> */}
        </div>
    )
}

export default EmployerSingleBody
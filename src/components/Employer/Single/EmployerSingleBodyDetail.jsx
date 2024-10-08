import React from 'react'
import EmployerCardSingleDetail from './EmployerCardSingleDetail'
import EmployerSingleSidebar from './EmployerSingleSidebar'

const EmployerSingleBodyDetail = ({ employerId }) => {
    return (
        <div className='md:m-16 md:mx-32 grid grid-cols-12'>
            <div className='col-span-12'>
                <EmployerCardSingleDetail employerId={employerId} />
            </div>
            {/* <div className='col-span-2'>
                <EmployerSingleSidebar employerId={employerId} />
            </div> */}
        </div>
    )
}

export default EmployerSingleBodyDetail
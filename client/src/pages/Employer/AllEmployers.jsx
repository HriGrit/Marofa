import React from 'react'

import Navbar from '../../components/Navbar/navbar'
import EmployerBanner from '../../components/Employer/EmployerBanner'
import EmployerBody from '../../components/Employer/All/Body/EmployerBody'

const AllEmployers = () => {
    return (
        <div>
            <Navbar />
            <div>
                <EmployerBanner />
                <EmployerBody />
            </div>
        </div>
    )
}

export default AllEmployers
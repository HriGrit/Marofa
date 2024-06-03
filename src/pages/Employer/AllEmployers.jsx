import React from 'react'

import Navbar from '../../components/Navbar/navbar'
import EmployerBanner from '../../components/Employer/EmployerBanner'
import EmployerBody from '../../components/Employer/All/Body/EmployerBody'
import Footer from '../../components/Footer/Footer'

const AllEmployers = () => {
    return (
        <div>
            <Navbar />
            <div className='m-4 mb-24'>
                <EmployerBanner />
                <EmployerBody />
            </div>
            <Footer />
        </div>
    )
}

export default AllEmployers
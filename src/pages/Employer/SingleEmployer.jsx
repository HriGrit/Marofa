import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'

import { useParams } from 'react-router-dom';
import EmployerSingleBody from "../../components/Employer/Single/EmployerSingleBody"

const SingleEmployer = () => {
    const { employerId } = useParams();
    
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <EmployerSingleBody employerId={employerId} />
            <Footer />
        </div>
    )
}

export default SingleEmployer
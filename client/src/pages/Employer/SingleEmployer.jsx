import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'

import { useParams } from 'react-router-dom';
import EmployerSingleBody from "../../components/Employer/Single/EmployerSingleBody"

const SingleEmployer = () => {
    const { employerId } = useParams();
    console.log(employerId);
    return (
        <div>
            <Navbar />
            <EmployerSingleBody employerId={employerId} />
            <Footer />
        </div>
    )
}

export default SingleEmployer
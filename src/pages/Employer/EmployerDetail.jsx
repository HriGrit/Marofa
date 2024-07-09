import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom';
import EmployerSingleBodyDetail from "../../components/Employer/Single/EmployerSingleBodyDetail"

const EmployerDetail = () => {
    const { id } = useParams();
    // console.log(id);
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <EmployerSingleBodyDetail employerId={id} />
            <Footer />
        </div>
    )
}

export default EmployerDetail
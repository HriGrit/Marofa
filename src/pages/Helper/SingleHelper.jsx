import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import HelperSingleBody from '../../components/Helper/Single/HelperSingleBody';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const SingleEmployer = () => {
    const { helperId } = useParams();
    
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <HelperSingleBody employerId={helperId} />
            <Footer />
        </div>
    )
}

export default SingleEmployer
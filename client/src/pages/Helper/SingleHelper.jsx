import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import HelperSingleBody from '../../components/Helper/Single/HelperSingleBody';

import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const SingleEmployer = () => {
    const { helperId } = useParams();
    console.log(helperId);
    return (
        <div>
            <Navbar />
            <HelperSingleBody employerId={helperId} />
            <Footer />
        </div>
    )
}

export default SingleEmployer
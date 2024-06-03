import React from 'react'

import Navbar from '../../components/Navbar/navbar'
import HelperBanner from '../../components/Helper/All/HelperBanner'
import HelperBody from '../../components/Helper/All/Main/HelperBody'

const AllHelpers = () => {
    return (
        <div>
            <Navbar />
            <div className='m-4'>
                <HelperBanner />
                <HelperBody />
            </div>
        </div>
    )
}

export default AllHelpers
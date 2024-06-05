import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';




const Loader = () => {


    return (
        <div className="h-screen flex items-center justify-center" >
            <CircularProgress

                color="primary"
                determinate={false}
                size="lg"
                variant="soft"
            />


        </div>
    );
};

export default Loader;
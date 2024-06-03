import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';




const Loader = () => {


    return (
        <div class="h-screen flex items-center justify-center" >
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
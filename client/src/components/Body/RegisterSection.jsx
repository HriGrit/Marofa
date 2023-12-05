// RegisterSection.jsx
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import SvgIcon1 from '../../assets/svg1.svg'; // Update with the correct path
import SvgIcon2 from '../../assets/svg2.svg'; // Update with the correct path
import SvgIcon3 from '../../assets/svg3.svg'; // Update with the correct path

const RegisterSection = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: "#F5F7FA" }}>

                <Typography variant="h4" component="div" sx={{ mb: 4 }}>
                    3 simple & easy steps to find your helper
                </Typography>

                <Stack direction={{ sm: 'column', md: 'row' }} spacing={4} justifyContent="center" sx={{ mx: { xs: 2, md: 4, lg: 8 } }}>
                    <Box sx={{ textAlign: 'center', textOverflow: "none" }}>
                        <img src={SvgIcon1} alt="Explore" className='mx-auto' />
                        <Typography variant="h6">1. Explore</Typography>
                        <Typography>
                            Explore hundreds of profiles ready to start in Saudi Arabia
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <img src={SvgIcon2} alt="Subscribe" className='mx-auto' />
                        <Typography variant="h6">2. Subscribe</Typography>
                        <Typography>
                            Subscribe from 100 SAR per week and get access to helpers contact details
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }} className="">
                        <img src={SvgIcon3} alt="Contact" className='mx-auto' />
                        <Typography variant="h6">3. Contact</Typography>
                        <Typography>
                            Contact helpers directly - saving thousands on agency fees
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Typography variant="h5" sx={{ my: 4, textAlign: "center" }}>
                "Discover Your Ideal Helper in Saudi Arabia with Ease and Speed"
            </Typography>
        </>
    );
};

export default RegisterSection;

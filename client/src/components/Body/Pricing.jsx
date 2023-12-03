// Pricing.jsx
import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import background from '../../assets/cardpic.svg'; // Replace with the correct path

const Pricing = () => {
    // You may need to adjust these colors to match the exact colors from the image.
    const standardColor = '#FFFFFF'; // White background for standard plan
    const premiumColor = '#1A1A1A'; // Dark background for premium plan
    const textColor = '#333'; // Generic text color, adjust as needed

    return (
        <Box
            sx={{
                position: 'relative',
                textAlign: 'center',
                py: 8,
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(255, 255, 255, 0.7)', // White with opacity for a "dim" effect
                    backdropFilter: 'blur(10px)', // Apply a blur effect

                },
            }}
        >
            <Typography sx={{ zIndex: 2 }} variant="h4" textAlign="center" mb={2} color={textColor}>
                Our Plans
            </Typography>
            <Typography variant="subtitle1" textAlign="center" mb={6} color={textColor}>
                One time fee - No automatic renewal & No additional agency fee
            </Typography>

            <Box display="flex" justifyContent="center" gap={2}>
                {/* Standard Plan */}
                <Card sx={{ maxWidth: 345, bgcolor: standardColor }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Standard
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            FREE
                        </Typography>
                        {/* ... Other details ... */}
                    </CardContent>
                    <Button variant="contained">Get Started</Button>
                </Card>

                {/* Premium Plan */}
                <Card sx={{ maxWidth: 345, bgcolor: premiumColor, color: '#fff' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Premium
                        </Typography>
                        <Typography variant="h6">
                            SAR 100
                        </Typography>
                        {/* ... Other details ... */}
                    </CardContent>
                    <Button variant="contained">Get Started</Button>
                </Card>
            </Box>
        </Box >
    );
};

export default Pricing;

import React from 'react';

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Body = () => {
    return (
        <Container>
            <Typography>
                <Box sx={{ fontFamily: "NeoSans", }}>
                    Welcome to Marofa
                </Box>
            </Typography>
        </Container >
    );
};

export default Body;
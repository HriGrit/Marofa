import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Cards from './Cards'

const Profiles = () => {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#F2F2F2" }}>
            <Container>
                <Typography variant="h5" sx={{
                    fontFamily: "NeoSans",
                    fontWeight: "semibold",
                    textAlign: "center",
                    mt: 8
                }}>
                    View Avaliable Helpers
                </Typography>
            </Container>
            <Grid container spacing={2} sx={{ mt: 4, px: 16 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Cards />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Cards />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Cards />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Profiles
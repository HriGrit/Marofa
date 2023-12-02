import React from 'react'

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";

import lady from "../../assets/landingpagefemale.svg"

const Body = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 4, padding: 0, backgroundColor: "#F9F9F9" }}> {/* Remove container padding */}
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6} sx={{ px: 0, mx: 0 }}> {/* Remove grid item padding */}
                        <h1>Body</h1>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' }, paddingLeft: 0, paddingRight: 0 }}> {/* Remove grid item padding */}
                        {/* Your Item component here */}
                        <img height={"500px"} src={lady} alt="lady" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}

export default Body
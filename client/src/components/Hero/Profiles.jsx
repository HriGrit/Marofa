import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Cards from './Cards'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

const Profiles = () => {
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#F2F2F2" }}>
            <Container>
                <Typography variant="h5" sx={{
                    fontFamily: "NeoSans",
                    fontWeight: "semibold",
                    textAlign: "center",
                    mt: 16
                }}>
                    View Avaliable Helpers
                </Typography>
            </Container>

            {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Grid container sx={{ backgroundColor: "red" }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                </Grid>
            </Box> */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4, height: '100%', px: 4 }}>
                <Grid container spacing={2} sx={{ maxWidth: 1200 }}> {/* Set a max width for the Grid container */}
                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }} >
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                        <Item>
                            <Cards />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default Profiles
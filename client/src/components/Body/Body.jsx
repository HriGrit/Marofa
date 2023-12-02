import React from 'react'

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Body = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Box>
                <Grid container spacing={2} sx={{ backgroundColor: "black" }}>
                    <Grid item sm={12} md={7} sx={{ backgroundColor: "red" }}>
                        <Item>
                            <h1>Body</h1>
                        </Item>
                    </Grid>
                    <Grid item md={5} sx={{ backgroundColor: "blue", display: { sm: 'none', md: 'block' } }}>
                        <Item>
                            <h1>Body</h1>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}

export default Body
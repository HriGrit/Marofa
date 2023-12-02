import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Profiles = () => {
    return (
        <Container position={"fixed"} sx={{ backgroundColor: "red" }} maxWidth="xxl">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Profiles
            </Typography>
        </Container>
    )
}

export default Profiles
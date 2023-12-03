import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import lady from '../../assets/cardpic.svg'

export default function Cards() {
    return (
        <Card sx={{ maxWidth: 280, borderRadius: 3 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={lady}
                    alt="helper-card"
                    sx={{
                        objectFit: 'contain',
                        width: "100%"
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "NeoSans", my: 2 }}>
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
                        Nationailty: Colambia
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
                        Experience: 2-5 years
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
                        Desired-Job: Nanny
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
                        Desired-Salary: $20/hr
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
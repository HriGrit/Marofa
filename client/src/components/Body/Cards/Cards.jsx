// import * as React from 'react';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// import lady from '../../../assets/cardpic.svg'

// export default function Cards() {
//     return (
//         <Card sx={{ maxWidth: 280, borderRadius: 3 }}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     src={lady}
//                     alt="helper-card"
//                     sx={{
//                         objectFit: 'contain',
//                         width: "100%"
//                     }}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "NeoSans", my: 2 }}>
//                         Lizard
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
//                         Nationailty: Colambia
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
//                         Experience: 2-5 years
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
//                         Desired-Job: Nanny
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "NeoSans", mb: 1 }}>
//                         Desired-Salary: $20/hr
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card >
//     );
// }
import React from 'react';
import lady from '../../../assets/cardpic.svg';

export default function Cards() {
    return (
        <div className="max-w-[280px] rounded-lg overflow-hidden shadow-lg">
            <div className="block">
                <img
                    src={lady}
                    alt="helper-card"
                    className="object-contain w-full"
                />
                <div className="p-4">
                    <h5 className="text-lg font-bold mb-2">Lizard</h5>
                    <p className="text-sm text-gray-600 mb-1">
                        Nationality: Colombia
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Experience: 2-5 years
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Desired Job: Nanny
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        Desired Salary: $20/hr
                    </p>
                </div>
            </div>
        </div>
    );
}

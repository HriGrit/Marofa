// import React from 'react';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Grid';
// import Cards from '../Cards/Cards';
// import Button from '@mui/material/Button';

// const Profiles = () => {
//     return (
//         <>
//             <Box>
//                 <Container>
//                     <Typography variant="h4" sx={{
//                         fontFamily: "NeoSans",
//                         fontWeight: "semibold",
//                         color: "#14415A",
//                         textAlign: "center",
//                         mt: 10
//                     }}>
//                         View Avaliable Helpers
//                     </Typography>
//                 </Container>

//                 <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 8, height: '100%', px: 4 }}>
//                     <Grid container spacing={2} sx={{ maxWidth: 1200 }}> {/* Set a max width for the Grid container */}
//                         <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
//                             <Item>
//                                 <Cards />
//                             </Item>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }} >
//                             <Item>
//                                 <Cards />
//                             </Item>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
//                             <Item>
//                                 <Cards />
//                             </Item>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
//                             <Item>
//                                 <Cards />
//                             </Item>
//                         </Grid>
//                     </Grid>
//                 </Box>

//                 <Box>
//                     <Typography variant="h5" sx={{
//                         fontFamily: "NeoSans",
//                         fontWeight: "semibold",
//                         textAlign: "center",
//                         fontSize: "1.5rem",
//                         color: "#ACA5A4",
//                         mt: 5
//                     }}>
//                         600+ helpers are waiting for you
//                     </Typography>
//                 </Box>

//                 <Container sx={{ textAlign: 'center', my: 4 }}>
//                     <Button variant="contained" sx={{ borderRadius: '30px', px: 5, backgroundColor: "#14415a", py: 2, fontWeight: "semibold" }}>
//                         View all Profiles
//                     </Button>
//                 </Container>
//             </Box >
//         </>
//     );
// };

// export default Profiles;
import React from 'react';
import Cards from '../Cards/Cards';

const Profiles = () => {
    return (
        <div className="py-10">
            <div className="text-center">
                <h4 className="font-semibold text-3xl text-[#14415A] mt-10">
                    View Available Helpers
                </h4>
            </div>

            <div className="flex justify-center items-center mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl"> {/* Set a max width for the Grid container */}
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <h5 className="font-semibold text-1.5rem text-[#ACA5A4]">
                    600+ helpers are waiting for you
                </h5>
            </div>

            <div className="text-center my-4">
                <button className="bg-[#14415a] text-white py-2 px-5 rounded-full font-semibold">
                    View all Profiles
                </button>
            </div>
        </div>
    );
};

export default Profiles;

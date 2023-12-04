import ladyImg from "../../assets/landingpagefemale.svg";
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "./CustomButton";
import Lady from "../Body/Lady";
import { left } from "@popperjs/core";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", }}>
      <Container maxWidth="100%" disableGutters >
        <CustomBox>
          <Box sx={{ flex: "1" }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",

                color: "#687690",
                fontWeight: "500",
                mt: 10,
              }}
            >
              Looking for helper work
            </Typography>
            <Title sx={{
              fontSize: { xs: "36px", lg: "48px", xl: "96px" },
              color: "#129874",
              fontWeight: "500",
            }}>
              Find available helpers and maid in Saudi Arabia
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "16px", lg: "18px" }, color: "#5A6473", my: "4" }}
            >
              Explore Profiles and contact helpers directly
            </Typography>
            <Box sx={{
              display: {
                sm: 'block', md: 'flex', lg: 'flex',
                justifyContent: 'flex-start',
                marginTop: '50px',
                marginBottom: '20px'
              }
            }}>
              <CustomButton
                className="button"
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="For Employers"
                heroBtn={true}
              />
              <CustomButton
                className="button"
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="For Helpers"
                heroBtn={true}
                sx={{ marginLeft: '120px' }}
              />
            </Box>
          </Box>


          <Box sx={{
            flex: "1.25",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
            height: 'auto',



          }}>
            <Lady sx={{ height: 'auto', maxWidthWidth: 'auto' }} />
          </Box>

        </CustomBox>
      </Container>
    </Box >
  );
};

export default Hero;
import { Box, styled } from '@mui/material';

const StyledLogo = styled('img')({});
import logo from "../../assets/landingpagefemale.svg";

const Logo = (props) => {
    return <StyledLogo src={logo} alt="Logo" width={"100%"}{...props} sx={{ position: "static", mt: 5.5, mr: 0 }} />;
};


export default Logo;
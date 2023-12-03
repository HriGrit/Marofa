import { Box, styled } from '@mui/material';

const StyledLogo = styled('img')({});
import logo from "../../assets/landingpagefemale.svg";

const Logo = (props) => {
    return <StyledLogo src={logo} alt="Logo" width={"100%"}{...props} sx={{ position: "relative" }} />;
};


export default Logo;
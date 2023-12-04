import { Box, styled } from '@mui/material';

const StyledLogo = styled('img')({});
import logo from "../../assets/landingpagefemale.svg";

const Logo = (props) => {
    return <StyledLogo className="svg_icons" src={logo} alt="Logo" width={"100%"}{...props} sx={{ position: "relative", borderRadius: '16px', mr: { sm: "16px", md: "18px" } }} />;
};



export default Logo;
import { Box, styled } from '@mui/material';

const StyledLogo = styled('img')({});
import logo from "../../assets/marofa-logo-dark.svg";

const Logo = (props) => {
    return <StyledLogo src={logo} alt="Logo" width={"70px"}{...props} />;
};


export default Logo;
import { Box, styled } from '@mui/material';

const StyledLogo = styled('img')({});
import logo from "../../assets/logo/marofa-logo-dark.svg";

const Logo = (props) => {
    return <StyledLogo src={logo} alt="Logo" width={"69px"}{...props} />;
};


export default Logo
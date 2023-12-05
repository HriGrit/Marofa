import { Box, styled } from '@mui/material';

const StyledLogo = styled('img')({});
import lady from "../../assets/landingpagefemale.svg";

const Logo = (props) => {
    return <StyledLogo className="lady" src={lady} alt="lady" />;
};



export default Logo;
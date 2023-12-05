import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
    backgroundColor,
    color,
    buttonText,
    heroBtn,
    guideBtn,
    getStartedBtn,
    sx,
}) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: backgroundColor,
        fontFamily: "NeoSans",
        color: color,
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        padding: "0.5rem 1.25rem",
        borderRadius: "7px",
        textTransform: "none",
        display: "block",
        marginTop: "20px",
        border: "2px solid transparent",


        "&:hover": {
            backgroundColor: color,
            color: backgroundColor,
            borderColor: backgroundColor,
        },
        [theme.breakpoints.down("md")]: {
            margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 5, "auto"),
            width: (heroBtn || getStartedBtn) && "50%"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: guideBtn && theme.spacing(3),
            width: guideBtn && "90%",
        },
    }));

    return <CustomButton className="custom-button" sx={{ ...sx }}>{buttonText}</CustomButton>;
};

export default CustomButton;
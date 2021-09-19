import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "inline-flex",
    borderRadius: "50%",
    boxShadow:
        theme.palette.mode === "dark"
            ? "0 -15px 15px rgba(255,255,255,0.05),inset 0 -15px 15px rgba(255,255,255,0.05),0 15px 15px rgba(0, 0, 0, 0.3),inset 0 15px 15px rgba(0, 0, 0, 0.3);"
            : "0 -15px 15px rgba(0,0,0,0.05),inset 0 -15px 15px rgba(0,0,0,0.05),0 15px 15px rgba(255, 255, 255, 0.3),inset 0 15px 15px rgba(255, 255, 255, 0.3);",
    "& circle": {
        transitionTimingFunction: "linear",
        transitionDuration: "1s",
    },
    "&:after": {
        // buttons pseudo element
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        zIndex: 2,
    },
}));

function Progress({ print, ...rest }) {
    return (
        <StyledBox>
            <CircularProgress
                sx={{ strokeLinecap: "round" }}
                variant="determinate"
                size={300}
                thickness={2}
                {...rest}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h2" fontWeight={700} component="div">
                    {print}
                </Typography>
            </Box>
        </StyledBox>
    );
}
export default Progress;

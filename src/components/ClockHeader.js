import React from "react";
import { Button, Box } from "@material-ui/core";
import useStore from "../hooks/useStore";

const ClockHeader = () => {
    return (
        <Box display="flex">
            <ClockButton type="pomodoro" text="Pomodoro" />
            <ClockButton type="short" text="Short Break" />
            <ClockButton type="long" text="Long Break" />
        </Box>
    );
};

const ClockButton = ({ type, text }) => {
    const setActiveMode = useStore((state) => state.setActiveMode);

    const handleClick = () => {
        setActiveMode(type);
    };
    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            {text}
        </Button>
    );
};

export default ClockHeader;

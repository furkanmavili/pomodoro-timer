import React from "react";
import { Button, Stack } from "@mui/material";
import useStore from "../../hooks/useStore";

const ClockHeader = () => {
    return (
        <Stack direction="row" justifyContent="center" spacing={2}>
            <ClockButton type="pomodoro" text="Pomodoro" />
            <ClockButton type="short" text="Short Break" />
            <ClockButton type="long" text="Long Break" />
        </Stack>
    );
};

const ClockButton = ({ type, text }) => {
    const setActiveMode = useStore((state) => state.setActiveMode);

    const handleClick = () => {
        setActiveMode(type);
    };
    return (
        <Button size="small" variant="contained" color="primary" onClick={handleClick}>
            {text}
        </Button>
    );
};

export default ClockHeader;

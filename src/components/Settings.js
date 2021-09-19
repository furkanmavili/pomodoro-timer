import React, { useState } from "react";
import useSettings from "../hooks/useSettings";
import { Drawer, FormControlLabel, Switch, Typography, Slider, IconButton, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import ThemeSwitcher from "./ThemeSwitcher";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Settings() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"))
    return (
        <>
            <IconButton
                variant="contained"
                onClick={() => setOpenDrawer(true)}
                sx={{ position: "fixed", top: "10px", right: "10px", color: "rgba(255,255,255, .5)" }}
            >
                <SettingsIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: matches ? 400 : "100%",
                        backgroundImage: "none",
                    },
                }}
                hideBackdrop
            >
                <Box px={theme.spacing(3)}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h2>Settings</h2>
                        <IconButton onClick={() => setOpenDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <div>
                        <CustomizedSlider label="Pomodoro Length" min={10} max={60} type="pomodoro" />
                        <CustomizedSlider label="Short Break Length" min={1} max={10} type="short" />
                        <CustomizedSlider label="Long Break Length" min={10} max={30} type="long" />
                        <Checkbox />
                    </div>
                    <ThemeSwitcher />
                </Box>
            </Drawer>
        </>
    );
}

function CustomizedSlider({ min, max, type, label }) {
    const state = useSettings((state) => state[type]);
    const setSetting = useSettings((state) => state.setSetting);

    const handleSliderChange = (e, value) => {
        setSetting(type, value);
    };
    return (
        <>
            <Typography>{label}</Typography>
            <Slider
                aria-label={type}
                valueLabelDisplay="auto"
                step={1}
                min={min}
                max={max}
                value={state}
                onChange={handleSliderChange}
            />
        </>
    );
}

function Checkbox() {
    const state = useSettings((state) => state.autoStart);
    const setSetting = useSettings((state) => state.setSetting);

    const handleChange = (e) => {
        setSetting("autoStart", e.target.checked);
    };
    return (
        <FormControlLabel
            control={<Switch checked={state} onChange={handleChange} name="autoStart" />}
            label="Auto start after sessions"
        />
    );
}

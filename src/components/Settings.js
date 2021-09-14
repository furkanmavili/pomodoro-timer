import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SettingsIcon from "@material-ui/icons/Settings";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PrettoSlider from "./prettoSlider";
import useSettings from "../hooks/useSettings";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 500,
    },
    sliders: {
        paddingTop: 30,
        paddingBottom: 30,
    },
}));

export default function Settings() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<SettingsIcon fontSize="large" />}
                onClick={handleOpen}
            >
                Settings
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Settings</h2>

                        <div className={classes.sliders}>
                            <Typography id="continuous-slider" gutterBottom>
                                Pomodoro length
                            </Typography>
                            <Slider min={10} max={60} type="pomodoro" />
                            <Typography id="continuous-slider" gutterBottom>
                                Short break length
                            </Typography>
                            <Slider min={1} max={10} type="short" />
                            <Typography id="continuous-slider" gutterBottom>
                                Long break length
                            </Typography>
                            <Slider min={10} max={30} type="long" />
                            <Checkbox />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

function Slider({ min, max, type }) {
    const state = useSettings((state) => state[type]);
    const setSetting = useSettings((state) => state.setSetting);

    const handleSliderChange = (e, value) => {
        setSetting(type, value);
    };
    return (
        <PrettoSlider
            aria-label={type}
            valueLabelDisplay="auto"
            step={1}
            min={min}
            max={max}
            value={state}
            onChange={handleSliderChange}
        />
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

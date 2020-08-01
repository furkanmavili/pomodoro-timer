import React from "react";
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

export default function Settings({ settings, setSettings }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };
  const handlePomodoro = (event, value) => {
    setSettings({ ...settings, pomodoro: value });
  };
  const handleShort = (event, value) => {
    setSettings({ ...settings, short: value });
  };
  const handleLong = (event, value) => {
    setSettings({ ...settings, long: value });
  };

  return (
    <div>
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
              <PrettoSlider
                aria-label="pomodoro"
                valueLabelDisplay="auto"
                step={1}
                min={10}
                max={60}
                value={settings.pomodoro}
                onChange={handlePomodoro}
              />
              <Typography id="continuous-slider" gutterBottom>
                Short break length
              </Typography>
              <PrettoSlider
                aria-label="short"
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={10}
                value={settings.short}
                onChange={handleShort}
              />
              <Typography id="continuous-slider" gutterBottom>
                Long break length
              </Typography>
              <PrettoSlider
                aria-label="long"
                valueLabelDisplay="auto"
                step={1}
                min={10}
                max={30}
                value={settings.long}
                onChange={handleLong}
              />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.autoStart}
                  onChange={handleChange}
                  name="autoStart"
                />
              }
              label="Auto start after sessions"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import ClockFooter from "./ClockFooter";
import ClockHeader from "./ClockHeader";
import useInterval from "../useInterval";
import ProgressBar from "./ProgressBar";
import { printableTime } from "../utils";
import bellSound from "../sounds/bell.mp3";
import useSound from "use-sound";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    padding: "2em",
    backgroundColor: "#f7c5a8",
  },
  clockText: {
    fontFamily: "'Dosis', sans-serif",
    textAlign: "center",
    marginBottom: "20px",
  },
  progressBar: {
    paddingTop: "2em",
  },
  button: {
    backgroundColor: "#679b9b",
  },
});
function ClockPanel({ activeMode, changeMode, settings }) {
  const [count, setCount] = useState(1500);
  const [initialTime, setInitialTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(bellSound);
  const [stat, setStat] = useState({
    pomodoro: 1,
    short: 0,
    long: 0,
  });
  const classes = useStyles();
  useEffect(() => {
    setCount(settings[activeMode] * 60);
    setInitialTime(settings[activeMode] * 60);
    setIsRunning(false);
  }, [activeMode, settings]);

  useEffect(() => {
    document.title = isRunning ? printableTime(count) : "Pomodoro Timer";
  }, [isRunning, count]);

  function calculateNextMode() {
    if (activeMode === "long" || activeMode === "short") {
      return "pomodoro";
    }
    if (activeMode === "pomodoro" && stat.pomodoro % 4 === 0) {
      return "long";
    } else {
      return "short";
    }
  }

  useInterval(
    () => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        play();
        const newStat = { ...stat };
        newStat[activeMode] = newStat[activeMode] + 1;
        setStat(newStat);
        const next = calculateNextMode();
        changeMode(next);
        setCount(initialTime);
        if (settings.autoStart) {
          setIsRunning(true);
        }
      }
    },
    isRunning ? 1000 : null
  );

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ClockHeader changeMode={changeMode} currentMode={activeMode} />
        </Grid>
        <Grid item xs={12}>
          <Counter count={count} />
        </Grid>
        <Grid item xs={12} align="center">
          <ClockFooter isRunning={isRunning} setIsRunning={setIsRunning} />
        </Grid>
        <Grid item xs={12} className={classes.progressBar}>
          <ProgressBar count={count} initialTime={initialTime} />
        </Grid>
      </Grid>
    </Paper>
  );
}

function Counter({ count }) {
  const classes = useStyles();
  return (
    <Typography className={classes.clockText} variant="h1">
      {printableTime(count)}
    </Typography>
  );
}
export default React.memo(ClockPanel);

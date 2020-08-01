import React from "react";
import { Grid, Button } from "@material-ui/core";

const ClockHeader = React.memo(function ClockHeader({
  changeMode,
  currentMode,
}) {
  function handleClick(mode) {
    changeMode(mode);
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick("pomodoro")}
          size="large"
          fullWidth
        >
          Pomodoro
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick("short")}
          size="large"
          fullWidth
        >
          Short Break
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick("long")}
          size="large"
          fullWidth
        >
          Long Break
        </Button>
      </Grid>
    </Grid>
  );
});

export default ClockHeader;

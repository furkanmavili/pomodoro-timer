import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  progress: {
    height: 10,
    borderRadius: 5,
  },
});

function ProgressBar({ count, initialTime }) {
  const classes = useStyles();
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const result = ((initialTime - count) * 100) / initialTime;
    setPercent(result);
  }, [count, initialTime]);

  return (
    <LinearProgress
      className={classes.progress}
      variant="determinate"
      value={percent}
    />
  );
}

export default ProgressBar;

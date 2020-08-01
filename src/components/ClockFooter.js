import React from "react";
import useSound from "use-sound";
import buttonSound from "../sounds/button.mp3";
import { Button } from "@material-ui/core";
function ClockFooter({ isRunning, setIsRunning }) {
  const [play] = useSound(buttonSound, { volume: 0.2 });
  const handleClick = () => {
    setIsRunning((prev) => !prev);
    play();
  };
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {isRunning ? "Stop" : "Start"}
    </Button>
  );
}

export default React.memo(ClockFooter);

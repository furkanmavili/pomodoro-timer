import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClockFooter from "./ClockFooter";
import ClockHeader from "./ClockHeader";
import useInterval from "../useInterval";
import ProgressBar from "./ProgressBar";
import { printableTime } from "../utils";
import bellSound from "../sounds/bell.mp3";
import useSound from "use-sound";

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #ec9b87;
  overflow: hidden;
  @media screen and (max-width: 1350px) {
    width: 100%;
  }
`;

const Clock = styled.div`
  h1 {
    font-size: 8rem;
    font-family: "Dosis", sans-serif;
    color: #fff;
    margin: 1.5rem;
  }
`;

const ClockPanel = React.memo(function ClockPanel({
  activeMode,
  changeMode,
  settings,
}) {
  const [count, setCount] = useState(1500);
  const [initialTime, setInitialTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(bellSound);
  const [stat, setStat] = useState({
    pomodoro: 1,
    short: 0,
    long: 0,
  });
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
        // const next = modes[modes.indexOf(activeMode) + 1];
        // changeMode(next ? next : modes[0]);
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
    <Container>
      <ClockHeader changeMode={changeMode} currentMode={activeMode} />
      <ProgressBar count={count} initialTime={initialTime} />
      <Counter count={count} />
      <ClockFooter isRunning={isRunning} setIsRunning={setIsRunning} />
    </Container>
  );
});

function Counter({ count }) {
  return (
    <Clock>
      <h1>{printableTime(count)}</h1>
    </Clock>
  );
}
export default ClockPanel;

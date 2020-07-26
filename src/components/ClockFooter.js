import React from "react";
import styled from "styled-components";
import useSound from "use-sound";
import buttonSound from "../sounds/button.mp3";

const Button = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  border: 2px solid lightgrey;
  border-radius: 8px;
  color: #000;
  background-color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  &:active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  }
`;
const ClockFooter = React.memo(function ClockFooter({
  isRunning,
  setIsRunning,
}) {
  const [play] = useSound(buttonSound, { volume: 0.2 });
  const handleClick = () => {
    setIsRunning((prev) => !prev);
    play();
  };
  return (
    <div style={{ marginBottom: "1em" }}>
      <Button onClick={handleClick}>{isRunning ? "Stop" : "Start"}</Button>
    </div>
  );
});

export default ClockFooter;

import React, { useState } from "react";
import Header from "./components/Header";
import ClockPanel from "./components/ClockPanel";
import styled from "styled-components";
import Modal from "react-modal";
import Social from "./components/Social";
import DancingDoodle from "./images/DancingDoodle.svg";
import Reading from "./images/ReadingDoodle.svg";

Modal.setAppElement("#root");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1350px) {
    width: 70%;
  }
  @media screen and (max-width: 535px) {
    width: 90%;
  }
`;

const Doodle = styled.div`
  position: absolute;
  top: 23%;
  width: 300px;
  height: 300px;
  transition: opacity 0.5s ease-in-out;
  left: ${({ position }) => (position === "left" ? "150px" : "")};
  right: ${({ position }) => (position === "right" ? "150px" : "")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0.3")};
  @media screen and (max-width: 1340px) {
    display: none;
  }
`;
const initialSettings = {
  sound: true,
  autoStart: false,
  pomodoro: 25,
  short: 5,
  long: 15,
};

function App() {
  const [activeMode, setActiveMode] = useState("pomodoro");
  const [settings, setSettings] = useState(initialSettings);
  return (
    <div style={{ backgroundColor: "#ea907a" }}>
      <Doodle
        isActive={activeMode === "pomodoro" ? true : false}
        position={"left"}
      >
        <img src={Reading} alt="coffee doodle" />
      </Doodle>
      <Doodle
        isActive={activeMode === "pomodoro" ? false : true}
        position={"right"}
      >
        <img src={DancingDoodle} alt="coffee doodle" />
      </Doodle>
      <Container>
        <Header settings={settings} setSettings={setSettings} />
        <ClockPanel
          settings={settings}
          activeMode={activeMode}
          changeMode={setActiveMode}
        />
      </Container>
      <Social />
    </div>
  );
}

export default App;

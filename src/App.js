import React, { useState } from "react";
import Header from "./components/Header";
import ClockPanel from "./components/ClockPanel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  // justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function App() {
  const [activeMode, setActiveMode] = useState("pomodoro");
  return (
    <div style={{ backgroundColor: "#ea907a" }}>
      <Container>
        <Header />
        <ClockPanel activeMode={activeMode} changeMode={setActiveMode} />
      </Container>
    </div>
  );
}

export default App;

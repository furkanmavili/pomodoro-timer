import React from "react";
import styled from "styled-components";

const Container = styled.div`
  ul {
    padding-left: 0;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  button {
    margin: 0 1em;
    padding: 10px 20px;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #000;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;

    &:hover {
      background-color: #f2f2f2;
    }
  }
  @media screen and (max-width: 700px) {
    button {
      font-size: 1rem;
      box-shadow: 0 5px #999;
      margin: 0 0.6em;
      padding: 5px 10px;
    }
  }
`;

const ClockHeader = React.memo(function ClockHeader({
  changeMode,
  currentMode,
}) {
  function handleClick(mode) {
    changeMode(mode);
  }

  return (
    <Container>
      <ul>
        <li>
          <button
            className={currentMode === "pomodoro" ? "active" : ""}
            onClick={() => handleClick("pomodoro")}
          >
            Pomodoro
          </button>
        </li>
        <li>
          <button
            className={currentMode === "short" ? "active" : ""}
            onClick={() => handleClick("short")}
          >
            Short Break
          </button>
        </li>
        <li>
          <button
            className={currentMode === "long" ? "active" : ""}
            onClick={() => handleClick("long")}
          >
            Long Break
          </button>
        </li>
      </ul>
    </Container>
  );
});

export default ClockHeader;

import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 2em auto;
  align-items: center;
  @media screen and (min-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 2.5rem;
    font-family: "Covered By Your Grace", cursive;
    color: #fff;
    pointer-events: none;
  }
  button {
    background-color: #ec9b87;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    padding: 5px 10px;
    font-size: 1rem;
    &:hover {
      background-color: #ea907a;
    }
  }
`;

const Header = React.memo(function Header({ settings, setSettings }) {
  return (
    <Container>
      <div>
        <h1>difficult to find name</h1>
      </div>
      <Settings settings={settings} setSettings={setSettings} />
    </Container>
  );
});

export default Header;

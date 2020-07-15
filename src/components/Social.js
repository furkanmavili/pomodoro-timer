import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100px;
  display: flex;
  justify-content: space-around;
  a {
    display: block;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-size: 2rem;
    transition: color 0.4s ease-in-out;
    &:hover,
    &:focus {
      color: #fff;
    }
  }
`;
function Social() {
  return (
    <Container>
      <a
        href="https://www.github.com/furkanmavili"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.twitter.com/ffmavili"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </Container>
  );
}

export default Social;

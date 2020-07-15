import styled from "styled-components";
const Button = styled.button`
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background-color: inherit;
  border: 3px solid #fff;
  width: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  @media all and (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`;
export default Button;

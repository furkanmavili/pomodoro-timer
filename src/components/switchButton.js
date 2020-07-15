import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Button = styled.div`
  z-index: 99;
  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + span {
        background-color: #2196f3;
      }
      &:focus + span {
        box-shadow: 0 0 1px #2196f3;
      }
      &:checked + span:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
      &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }
    }
  }
`;

function SwitchButton({ isChecked, setSettings }) {
  const [check, setCheck] = useState(isChecked);
  function handleCheck() {
    setCheck((prev) => !prev);
  }
  useEffect(() => {
    setSettings((prev) => {
      return { ...prev, autoStart: check };
    });
  }, [check, setSettings]);

  return (
    <Button>
      {isChecked ? (
        <label>
          <input
            name="autoStart"
            value={check}
            type="checkbox"
            onChange={handleCheck}
            checked
          />
          <span />
        </label>
      ) : (
        <label>
          <input
            name="autoStart"
            value={check}
            type="checkbox"
            onChange={handleCheck}
          />
          <span />
        </label>
      )}
    </Button>
  );
}
export default SwitchButton;

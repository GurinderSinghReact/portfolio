import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 92%;
  position: relative;
  justify-content: center;
`;

const Label = styled.span`
  color: rgb(219, 218, 218);
  font-size: 16px;
  display: inline-block;
  position: absolute;
  padding: 2px 5px;
  transform: translate(10px, 0);
  transition: all linear 0.12s;
  z-index: -1;
`;

const InputLabel = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  border-radius: 4px;
  border-bottom: 1px solid white;
  background-color: transparent;

  &:focus + ${Label} {
    opacity: 1;
    color: #fab005;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transform: translate(10px, -25px);
    background-color: #ffffff1a;
    z-index: 1;
  }

  ${({ value }) =>
    !!value &&
    css`
      & + ${Label} {
        opacity: 1;
        color: rgb(89, 179, 213);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transform: translate(10px, -25px);
        background-color: #fff;
        z-index: 1;
      }
    `}
`;

const Input = ({labelValue}) => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <InputLabel
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <Label>{labelValue}</Label>
    </Container>
  );
};

export default Input;

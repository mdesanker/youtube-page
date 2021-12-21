import React from "react";
import styled, { css } from "styled-components";

interface Props {
  text: string;
  color?: string;
}

const RoundBtn: React.FC<Props> = ({ text, color }) => {
  return <Wrapper color={color}>{text}</Wrapper>;
};

const Wrapper = styled.button`
  font-size: 14px;
  color: #030303;
  padding: 0 12px;
  margin: 8px 8px 8px 0;
  background-color: rgba(0, 0, 0, 0.05);
  height: 32px;
  border-radius: 16px;
  border: 1px solid lightgray;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${(props) =>
    props.color &&
    css`
      color: #fff;
      background-color: ${props.color};
      border: 1px solid ${props.color};

      &:hover {
        background-color: ${props.color};
      }
    `};
`;

export default RoundBtn;

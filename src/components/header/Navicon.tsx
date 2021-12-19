import React from "react";
import styled from "styled-components";

interface Props {
  color?: string;
}

const Navicon: React.FC<Props> = ({ color }) => {
  return (
    <Container color={color}>
      <div />
    </Container>
  );
};

const Container = styled.button`
  margin: 8px;
  height: 18px;
  width: 18px;
  z-index: 100;
  background-color: transparent;
  cursor: pointer;
  border: none;

  & div {
    position: absolute;
    background-color: ${(props) => (props.color ? props.color : "#fff")};
    height: 1px;
    width: 18px;
    top: 50%;
  }

  & div::before {
    position: absolute;
    content: "";
    top: -6px;
    left: 0;
    background-color: ${(props) => (props.color ? props.color : "#fff")};
    height: 1px;
    width: 18px;
  }

  & div::after {
    position: absolute;
    content: "";
    top: 6px;
    left: 0;
    background-color: ${(props) => (props.color ? props.color : "#fff")};
    height: 1px;
    width: 18px;
  }
`;

export default Navicon;

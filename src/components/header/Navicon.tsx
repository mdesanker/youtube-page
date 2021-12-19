import React from "react";
import styled from "styled-components";

const Navicon: React.FC = () => {
  return (
    <Container>
      <div />
    </Container>
  );
};

const Container = styled.div`
  height: 24px;
  width: 20px;
  z-index: 100;
  background-color: transparent;
  cursor: pointer;

  & div {
    position: absolute;
    background-color: #fff;
    height: 1px;
    width: 20px;
    top: 50%;
  }

  & div::before {
    position: absolute;
    content: "";
    top: -7px;
    background-color: #fff;
    height: 1px;
    width: 20px;
  }

  & div::after {
    position: absolute;
    content: "";
    top: 7px;
    background-color: #fff;
    height: 1px;
    width: 20px;
  }
`;

export default Navicon;

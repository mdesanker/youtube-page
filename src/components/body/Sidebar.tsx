import React from "react";
import styled from "styled-components";

const Sidebar: React.FC = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 400px;
  height: 1000px;
  border: 1px solid red;

  @media (max-width: 999px) {
    width: 100%;
  }
`;

export default Sidebar;

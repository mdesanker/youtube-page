import React from "react";
import styled from "styled-components";
import VideoTab from "./VideoTab";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <VideoTab />
    </Container>
  );
};

const Container = styled.div`
  min-width: 400px;
  height: 1000px;
  border: 1px solid red;

  @media (max-width: 999px) {
    width: 100%;
  }
`;

export default Sidebar;

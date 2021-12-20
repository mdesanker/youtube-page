import React from "react";
import styled from "styled-components";
import VideoTab from "./VideoTab";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <VideoTab />
      <VideoTab />
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  height: 1000px;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 999px) {
    width: 100%;
  }
`;

export default Sidebar;

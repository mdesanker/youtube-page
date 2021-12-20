import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import YoutubeEmbed from "./YoutubeEmbed";

const Page: React.FC = () => {
  return (
    <Wrapper>
      <YoutubeEmbed embedId="km2OPUctni4" />
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 80px;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Page;

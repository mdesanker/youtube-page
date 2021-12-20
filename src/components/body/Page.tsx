import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import YoutubeEmbed from "./YoutubeEmbed";

const Page: React.FC = () => {
  return (
    <Wrapper>
      <YoutubeEmbed embedId="ZiOAK7tE3xY" />
      <Sidebar />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 90px;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export default Page;

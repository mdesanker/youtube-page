import React from "react";
import styled from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";

const Page: React.FC = () => {
  return (
    <Wrapper>
      <YoutubeEmbed embedId="ZiOAK7tE3xY" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 56px;
`;

export default Page;

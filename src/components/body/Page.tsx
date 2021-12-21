import React from "react";
import styled from "styled-components";
import ChannelInfo from "./ChannelInfo";
import CommentSection from "./CommentSection";
import Keywords from "./Keywords";
import Sidebar from "./Sidebar";
import VideoInfo from "./VideoInfo";
import YoutubeEmbed from "./YoutubeEmbed";

const Page: React.FC = () => {
  return (
    <Wrapper>
      <VideoWrapper>
        <YoutubeEmbed embedId="km2OPUctni4" />
        <VideoInfo />
        <ChannelInfo />
        <Keywords />
        <CommentSection />
      </VideoWrapper>
      <Sidebar />
    </Wrapper>
  );
};

const VideoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.main`
  // padding-top: 80px;
  max-width: 1500px;
  padding: 80px 20px 0;
  margin: 0 auto;
  display: flex;
  // justify-content: center;

  gap: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default Page;

import React from "react";
import styled from "styled-components";
import VideoTab from "./VideoTab";
import videos from "../../assets/catalogs/videos.json";

const Sidebar: React.FC = () => {
  // console.log(videos);

  return (
    <Container>
      {videos &&
        videos.map((video) => {
          return <VideoTab key={video.id} video={video} />;
        })}
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

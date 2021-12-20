import React from "react";
import styled from "styled-components";

interface Props {}

const VideoTab: React.FC<Props> = () => {
  return (
    <Container>
      <ImgContainer>
        <Image alt="video" />
        <Duration>20:26</Duration>
      </ImgContainer>
    </Container>
  );
};

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;

const Duration = styled.p`
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 20px;
  color: white;
  font-weight: bold;
  padding: 2px 5px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ImgContainer = styled.div`
  position: relative;
  width: 168px;
  height: 94px;
  background-color: pink;
`;

const Container = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  gap: 10px;

  border: 1px solid green;
`;

export default VideoTab;

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
      <DetailsContainer>
        <Title>
          ALL ACCESS: Canelo vs. Plant | Epilogue | Here's more text
        </Title>
        <Details>SHOWTIME Sports</Details>
        <Details>1.6M views &#183; 1 month ago</Details>
      </DetailsContainer>
    </Container>
  );
};

const Details = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #606060;
`;

const Title = styled.h3`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;

const DetailsContainer = styled.div`
  height: 94px;
  flex-grow: 1;
`;

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
`;

const Container = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  gap: 10px;
`;

export default VideoTab;

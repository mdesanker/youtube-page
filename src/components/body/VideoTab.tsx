import React from "react";
import styled from "styled-components";

interface Props {
  video: any;
}

const VideoTab: React.FC<Props> = ({ video }) => {
  const { id, title, channel, views, date, duration } = video;

  const image = require(`../../assets/images/video-${id}.jpg`);

  return (
    <Container>
      <ImgContainer>
        <Image src={image} alt="video" />
        <Duration>{duration}</Duration>
      </ImgContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        <Details>{channel}</Details>
        <Details>
          {views} views &#183; {date} ago
        </Details>
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
  height: 94px;
  width: 168px;
  object-fit: cover;
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
  cursor: pointer;
`;

export default VideoTab;

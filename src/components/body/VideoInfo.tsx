import React from "react";
import styled from "styled-components";
import IconBtn from "../elements/IconBtn";

const VideoInfo: React.FC = () => {
  return (
    <>
      <TitleWrapper>
        <Title>Saitama vs Genos Fight | One Punch Main (60FPS)</Title>
        <SubTitle>
          <Views>27,218,848 views &#183; Oct 19, 2016</Views>
          <BtnContainer>
            <IconBtn text="309K" icon="far fa-thumbs-up" />
            <IconBtn text="Dislike" icon="far fa-thumbs-down" />
            <IconBtn text="Share" icon="fas fa-share" />
            <IconBtn text="save" icon="fas fa-list" />
            <IconBtn icon="fas fa-ellipsis-h" />
          </BtnContainer>
        </SubTitle>
      </TitleWrapper>
    </>
  );
};

const BtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Views = styled.p`
  font-size: 14px;
  color: #606060;
  line-height: 16px;
`;

const SubTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #030303;
  font-weight: 400;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 20px 0 8px;
  border-bottom: 1px solid lightgray;
`;

export default VideoInfo;

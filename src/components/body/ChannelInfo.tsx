import React from "react";
import styled from "styled-components";
import SubscribeBtn from "../elements/SubscribeBtn";

const ChannelInfo: React.FC = () => {
  return (
    <Wrapper>
      <ProfileImg className="far fa-user" />
      <SubscribeBtn text="subscribe" />
    </Wrapper>
  );
};

const ProfileImg = styled.i`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #457b9d;
  color: #a8dadc;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid lightgray;

  display: flex;
`;

export default ChannelInfo;

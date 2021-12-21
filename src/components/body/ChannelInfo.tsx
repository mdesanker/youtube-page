import React from "react";
import styled from "styled-components";
import SubscribeBtn from "../elements/SubscribeBtn";

const ChannelInfo: React.FC = () => {
  return (
    <Wrapper>
      <ProfileImg className="far fa-user" />
      <ChannelDetails>
        <h3>60FpsStation</h3>
        <h5>22.2K subscribers</h5>
        <p>I do not own any rights to the anime or its music.</p>
        <p>
          Copyright Disclaimer Under Section 107 of the Copyright Act 1976,
          allowance is made for "fair use"
        </p>
        <button>Show more</button>
      </ChannelDetails>
      <SubscribeBtn text="subscribe" />
    </Wrapper>
  );
};

const ChannelDetails = styled.div`
  flex-grow: 1;

  & h3 {
    font-size: 14px;
    padding-bottom: 5px;
  }

  & h5 {
    font-weight: normal;
    color: #606060;
    font-size: 12px;
  }

  & p {
    padding-top: 20px;
    color: #030303;
    font-size: 14px;
  }

  & button {
    padding-top: 10px;
    color: #606060;
    font-size: 12px;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
  }
`;

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
  margin-bottom: 16px;
  border-bottom: 1px solid lightgray;

  display: flex;
  gap: 10px;
`;

export default ChannelInfo;

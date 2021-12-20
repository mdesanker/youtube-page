import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const SubscribeBtn: React.FC<Props> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.button`
  font-size: 15px;
  font-weight: bold;
  color: white;
  line-height: 16px;
  text-transform: uppercase;
  height: 36px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export default SubscribeBtn;

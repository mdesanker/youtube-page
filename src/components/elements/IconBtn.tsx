import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
  icon?: string;
}

const IconBtn: React.FC<Props> = ({ text, icon }) => {
  return (
    <Wrapper>
      <Icon className={icon} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const Icon = styled.i`
  font-size: 18px;
  padding: 5px;
`;

const Text = styled.p`
  color: #030303;
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
`;

const Wrapper = styled.button`
  height: 36px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 6px;
`;

export default IconBtn;

import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <Icon src={logo} alt="logo" />
      <Name>YouTube</Name>
    </Wrapper>
  );
};

const Name = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Icon = styled.img`
  height: 20px;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 56px;
  padding: 18px 14px 18px 16px;
`;

export default Logo;

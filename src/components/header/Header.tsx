import React from "react";
import styled from "styled-components";
import Navicon from "./Navicon";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      {/* <Icon className="fas fa-bars" /> */}
      <Navicon />
    </HeaderWrapper>
  );
};

const Icon = styled.i`
  color: white;
  font-size: 20px;
  height: 24px;
  width: 24px;
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: #000;
  padding: 0 16px;

  display: flex;
  align-items: center;
`;

export default Header;

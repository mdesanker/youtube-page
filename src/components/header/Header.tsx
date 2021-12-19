import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return <HeaderWrapper></HeaderWrapper>;
};

const HeaderWrapper = styled.header`
  height: 56px;
  width: 100%;
  background-color: #000;
  padding: 0 16px;

  display: flex;
  align-items: center;
`;

export default Header;

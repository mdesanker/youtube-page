import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navicon from "./Navicon";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Navicon />
      <Logo />
      <SearchBar />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: rgb(52, 52, 52);
  padding: 0 16px;

  display: flex;
  align-items: center;
`;

export default Header;

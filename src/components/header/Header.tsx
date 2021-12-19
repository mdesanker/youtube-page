import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navicon from "./Navicon";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Section>
        <Navicon />
        <Logo />
      </Section>
      <SearchBar />
      <ProfileIcon />
    </HeaderWrapper>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 56px;
  width: 100%;
  background-color: rgb(52, 52, 52);
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;

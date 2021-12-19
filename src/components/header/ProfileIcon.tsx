import React from "react";
import styled from "styled-components";

const ProfileIcon: React.FC = () => {
  return (
    <Wrapper>
      <i className="fas fa-user" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  background-color: pink;

  display: flex;
  justify-content: center;
  align-items: center;

  & i {
    font-size: 18px;
  }
`;

export default ProfileIcon;

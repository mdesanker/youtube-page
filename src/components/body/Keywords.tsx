import React from "react";
import styled from "styled-components";
import RoundBtn from "../elements/RoundBtn";

const Keywords: React.FC = () => {
  return (
    <Wrapper>
      <RoundBtn text="All" color="black" />
      <RoundBtn text="From your search" />
      <RoundBtn text="Saitama" />
      <RoundBtn text="Anime" />
      <RoundBtn text="Related" />
      <RoundBtn text="Recently uploaded" />
      <RoundBtn text="Watched" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  margin-right: 12px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export default Keywords;

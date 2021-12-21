import React from "react";
import styled from "styled-components";
import IconBtn from "../elements/IconBtn";
import IconImg from "../elements/IconImg";

const Comment: React.FC = () => {
  return (
    <Wrapper>
      <IconImg color="green" />
      <Container>
        <CommentHeader>
          <h4>Mr. Issu Fresh</h4>
          <p>1 year ago (edited)</p>
        </CommentHeader>
        <CommentText>
          If that punch hit Genos, even the writers can't bring him back
        </CommentText>
      </Container>
      <IconBtn icon="fas fa-ellipsis-v" />
    </Wrapper>
  );
};

const CommentText = styled.p`
  font-size: 14px;
`;

const CommentHeader = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & h4 {
    font-size: 13px;
  }

  & p {
    font-size: 12px;
    color: #606060;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 112px;
  margin-bottom: 16px;
`;

export default Comment;

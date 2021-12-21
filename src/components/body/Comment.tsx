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
        <CommentReactions>
          <Btn>
            <i className="far fa-thumbs-up"></i>
          </Btn>
          <p>49K</p>
          <Btn>
            <i className="far fa-thumbs-down"></i>
          </Btn>
          <ReplyBtn>reply</ReplyBtn>
        </CommentReactions>
        <CommentReplies>
          <i className="fas fa-caret-down" />
          <p>View 364 replies</p>
        </CommentReplies>
      </Container>
      <IconBtn icon="fas fa-ellipsis-v" />
    </Wrapper>
  );
};

const CommentReplies = styled.div`
  display: flex;
  align-items: center;
  color: #065fd4;
  font-size: 14px;
  font-weight: bold;
  padding: 2px 0 10px;

  & i {
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    margin-left: 8px;
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ReplyBtn = styled(Btn)`
  padding: 8px 16px;
  color: #606060;
  text-transform: uppercase;
`;

const CommentReactions = styled.div`
  display: flex;
  align-items: center;
  height: 34px;

  & p {
    font-size: 12px;
    margin-right: 8px;
    color: #606060;
  }
`;

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

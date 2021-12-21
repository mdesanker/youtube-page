import React from "react";
import styled from "styled-components";
import IconBtn from "../elements/IconBtn";
import IconImg from "../elements/IconImg";

const CommentSection: React.FC = () => {
  return (
    <Wrapper>
      <CommentHeader>
        <p>20,323 Comments</p>
        <IconBtn text="sort by" icon="fas fa-sort-amount-down" />
      </CommentHeader>
      <AddComment>
        <IconImg color="pink" />
        <Input
          type="text"
          name="comment"
          id="comment"
          placeholder="Add a public comment..."
        />
      </AddComment>
    </Wrapper>
  );
};

const Input = styled.input`
  flex-grow: 1;
  height: 25px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

const AddComment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  height: 40px;
`;

const CommentHeader = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export default CommentSection;

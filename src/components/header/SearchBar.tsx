import React from "react";
import styled from "styled-components";

const SearchBar: React.FC = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    (document.querySelector("#search") as HTMLInputElement).value = "";

    // search.value = "";
  };

  return (
    <Container onSubmit={submitHandler}>
      <Search type="text" name="search" id="search" placeholder="Search" />
      <Button>
        <i className="fas fa-search" />
      </Button>
    </Container>
  );
};

const Button = styled.button`
  width: 64px;
  height: 40px;
  color: lightgray;
  font-size: 20px;
  background-color: rgb(80, 80, 80);
  border: 1px solid rgb(80, 80, 80);
`;

const Search = styled.input`
  height: 40px;
  width: 350px;
  background-color: black;
  padding: 10px 15px;
  color: lightgray;
  font-size: 1rem;
  border: 1px solid rgb(80, 80, 80);
`;

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchBar;
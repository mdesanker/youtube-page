import React from "react";
import Header from "./components/header/Header";
import GlobalStyles from "./themes/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
};

export default App;

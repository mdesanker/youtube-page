import React from "react";
import Page from "./components/body/Page";
import Header from "./components/header/Header";
import GlobalStyles from "./themes/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Page />
    </>
  );
};

export default App;

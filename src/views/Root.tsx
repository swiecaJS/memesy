import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Create from "./Create";
import Home from "./Home";
import Yours from "./Yours";

import Header from "../components/Header";

import "../shared/styles/index.scss";
const theme = {
  colors: {
    primary: "#1d4e89",
    primary20: "#1d4f8b33",
    textPrimary: "#ffffff"
  },
  sizes: {
    headerHeight: "60px"
  }
};

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/create" component={Create} />
        <Route path="/yours" component={Yours} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;

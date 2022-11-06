import React from "react";
import GlobalStyles from "./GlobalStyles.css"
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Our_Magic from "./components/Our_Magic/BackgroundSlider"
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Our_Magic />
      </BrowserRouter>
    </>
  );
}

export default App;

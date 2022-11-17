import React, { Fragment } from "react";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Our_Magic from "./components/Our_Magic/BackgroundSlider";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Project1 from "./components/Projects/Project1";
import * as ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Our_Magic />
        <Team />
        <Contact />
        <Routes>
          <Route path="/project_1" component={<Project1 />} />
        </Routes>
      {/* <Routes>
        <Route path="">
          <Navbar />
          <Home />
          <About />
          <Our_Magic />
          <Team />
          <Contact />
        </Route>
        <Route path="project1" component={Project1} />
      </Routes> */}
      {/* <Routes>
          <Route path="/#home" element={<Home />} />
          <Route path="/#about" element={<About />} />
          <Route path="/#our_magic" element={<Our_Magic />} />
          <Route path="/#team" element={<Team />} />
          <Route path="/#contact" element={<Contact />} />
        </Routes> */}
    </>
  );
}

export default App;

import React from "react";
import "../css/tailwind.css";
import "../App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectList from "./ProjectList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectList />
    </>
  );
}

export default App;

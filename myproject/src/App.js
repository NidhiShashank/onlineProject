import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import Header from "./Components/Header";
import Course from "./Pages/Course";
import Mylearning from "./Pages/Mylearning";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="about" element={<About />} />
        <Route path="contect" element={<Contect />} />
        <Route path="course" element={<Course />} />
        <Route path="mylerning" element={<Mylearning />} />
      </Routes>
    </div>
  );
};

export default App;

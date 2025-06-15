import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import DefaultContainer from "./DefaultContainer";
import Home from "./components/Home/Home";
import UploadFile from "./components/UploadFile/UploadFile";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultContainer />}>
          <Route index element={<Home />} />
          <Route path="uploadFile" element={<UploadFile />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

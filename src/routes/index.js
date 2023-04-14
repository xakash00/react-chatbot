import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatBot from "../components/chatBot";
import Headerlayout from "../layouts/HeaderLayout";
import Home from "../pages/home";
import FileTree from "../pages/file-tree";

const Routing = () => {
  return (
    <Headerlayout>
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="/gify" element={<Home />} />
        <Route path="/file" element={<FileTree/>}/>
      </Routes>
    </Headerlayout>
  );
};

export default Routing;

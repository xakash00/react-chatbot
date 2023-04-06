import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatBot from "../components/chatBot";
import Headerlayout from "../layouts/HeaderLayout";
import Home from "../pages/home";

const Routing = () => {
  return (
    <Headerlayout>
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="/gify" element={<Home />} />
      </Routes>
    </Headerlayout>
  );
};

export default Routing;

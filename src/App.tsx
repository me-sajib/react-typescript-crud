import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Update from "./components/Update/Update";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;

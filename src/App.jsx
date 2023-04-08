import React from "react";
import { Route, Routes } from "react-router-dom";
import Employee from "./Screen/Employee";
import Admin from "./Screen/Admin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Employee />} />
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  );
};

export default App;

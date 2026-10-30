import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import InternshipDetails from "./components/InternshipDetails";
import ApplicationForm from "./components/ApplicationForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/proxy/5173" : "/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship/:id" element={<InternshipDetails />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

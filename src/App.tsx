import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import ShowsPage from "./ShowsPage/ShowsPage";
import AboutPage from "./AboutPage/AboutPage";
import CastAndCrewPage from "./CastAndCrewPage/CastAndCrewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/company" element={<CastAndCrewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

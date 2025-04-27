import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import ShowsPage from "./ShowsPage/ShowsPage";
import AboutPage from "./AboutPage/AboutPage";
import CastAndCrewPage from "./CastAndCrewPage/CastAndCrewPage";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      {page === "Home" && <HomePage setPage={setPage} />}
      {page === "Shows" && <ShowsPage setPage={setPage} />}
      {page === "About" && <AboutPage setPage={setPage} />}
      {page === "CastAndCrew" && <CastAndCrewPage setPage={setPage} />}
    </div>
  );
}

export default App;

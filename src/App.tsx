import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      {/* <MenuBar /> */}
      {/* 
        
      <header className="App-header">
        <img src={CS_logo_only} className="App-logo" alt="logo" />
        <p>
          Welcome to the Cult of
        </p>
        <a
          className="App-link"
          href="https://circussomething.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Circus Something 
        </a> 
        
      </header>
        */}
      {page === "Home" && <HomePage setPage={setPage} />}
    </div>
  );
}

export default App;
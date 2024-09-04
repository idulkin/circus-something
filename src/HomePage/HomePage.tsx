import React from "react";
import CS_logo_only from "../assets/CS_logo_only.png";
import title_logo from "../assets/cs-final-logotype-white_orig.png";

import MenuBar from "../MenuBar/MenuBar";
import "./HomePage.css";

interface HomePageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar setPage={setPage} width={"100vw"} />
      </div>
      <div className="content-container">
        <div className="title-container">
          <img src={title_logo} className="title-logo" alt="Circus Something" />
          <h2 className="subtitle">Avant-garde ritual circus theater</h2>
        </div>
        <div className="image-container">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Placeholder"
            className="background-image"
          />
          <div className="overlay"></div>
        </div>
        <div>
          <img
            src={CS_logo_only}
            className="logo"
            alt="Circus Something logo"
          />
          <p>Welcome to the Cult of</p>
          <a
            className="App-link"
            href="https://circussomething.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Circus Something
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";

import MenuBar from "../MenuBar/MenuBar";
import "./AboutPage.css";

interface AboutPageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const AboutPage: React.FC<AboutPageProps> = ({ setPage }) => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar setPage={setPage} />
      </div>
      <div className="content-container">
        <h1 className="title">ABOUT</h1>
      </div>
    </div>
  );
};

export default AboutPage;

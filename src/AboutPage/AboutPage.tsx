import React from "react";

import masksOff from "../assets/masksOff.png";
import masksOn from "../assets/masksOn.png";

import MenuBar from "../MenuBar/MenuBar";
import "./AboutPage.css";
import CultSignup from "../CultSignup/CultSignup";
import BioAndImage from "../Components/BioAndImage/BioAndImage";
import { aboutBios } from "./AboutBios";

interface AboutPageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const AboutPage: React.FC<AboutPageProps> = ({ setPage }) => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar setPage={setPage} />
      </div>
      <div className="page-container">
        <h2 className="title">ABOUT THE CREATORS</h2>
        <p className="text">
          Wife and husband duo Ash and Igor bring to you something… otherworldly
          and vaguely threatening.{" "}
        </p>

        <BioAndImage
          image={masksOff}
          name={aboutBios.Ash.name}
          description={aboutBios.Ash.description}
          imageRightOfText={true}
        />
        <BioAndImage
          image={masksOn}
          name={aboutBios.Igor.name}
          description={aboutBios.Igor.description}
          imageRightOfText={false}
        />
        <CultSignup />
      </div>
    </div>
  );
};

export default AboutPage;

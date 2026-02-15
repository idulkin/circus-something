import React from "react";

import MenuBar from "../MenuBar/MenuBar";
import "./CastAndCrewPage.css";
import CultSignup from "../CultSignup/CultSignup";
import BioAndImage from "../Components/BioAndImage/BioAndImage";
import { castBios } from "./CastBios";

const CastAndCrewPage: React.FC = () => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar />
      </div>
      <div className="page-container">
        <h2 className="title">COMPANY MEMBERS</h2>
        <p className="text">Creatures of darkness and luminaries of light </p>
        <div className="bio-container">
          {Object.entries(castBios).map(([key, bio], index) => (
            <BioAndImage
              key={key}
              name={bio.name}
              description={bio.description}
              image={require(`../assets/${bio.image}`)}
              imageRightOfText={index % 2 !== 0}
            />
          ))}
        </div>
        <CultSignup />
      </div>
    </div>
  );
};

export default CastAndCrewPage;

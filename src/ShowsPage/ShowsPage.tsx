import React from "react";

import MenuBar from "../MenuBar/MenuBar";
import "./ShowsPage.css";
import CultSignup from "../CultSignup/CultSignup";

interface ShowsPageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const ShowsPage: React.FC<ShowsPageProps> = ({ setPage }) => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar setPage={setPage} />
      </div>
      <div className="content-container">
        <h1 className="title">SHOWS</h1>
        <div>
          <h2 className="sub-title">THE LONGEST DAY 2024</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DSkumonmxbE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="sub-title">THE LONGEST NIGHT 2023</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WJ3d_28mQr4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <CultSignup />
      </div>
    </div>
  );
};

export default ShowsPage;

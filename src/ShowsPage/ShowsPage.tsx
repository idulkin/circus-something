import React from "react";

import MenuBar from "../MenuBar/MenuBar";
import "./ShowsPage.css";

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
      </div>
    </div>
  );
};

export default ShowsPage;

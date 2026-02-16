import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MenuBar.css";

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const [menuHeight, setMenuHeight] = useState(window.innerHeight / 16);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenuHeight(window.innerHeight / 16);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu-bar">
      <div className="button-container" style={{ height: menuHeight }}>
        <button
          className={`menu-button ${showMenu ? "menu-open" : ""}`}
          onClick={handleClickMenu}
        >
          CHOOSE
        </button>
      </div>

      <div className={`nav-container ${showMenu ? "nav-visible" : ""}`}>
        <button className="menu-nav-button" onClick={() => navigate("/")}>
          HOME
        </button>
        <button className="menu-nav-button" onClick={() => navigate("/shows")}>
          SHOWS
        </button>
        <button className="menu-nav-button" onClick={() => navigate("/about")}>
          ABOUT
        </button>
        <button
          className="menu-nav-button"
          onClick={() => navigate("/company")}
        >
          COMPANY
        </button>
      </div>
    </div>
  );
};

export default MenuBar;

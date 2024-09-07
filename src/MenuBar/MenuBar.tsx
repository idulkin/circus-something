import React, { useEffect, useState } from "react";

import "./MenuBar.css";

interface MenuBarProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ setPage }) => {
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
        <button className="menu-button" onClick={handleClickMenu}>
          MENU
        </button>
        <button />
      </div>
      {/* <hr /> */}

      {showMenu && (
        <div className="nav-container">
          <button className="nav-button" onClick={() => setPage("Home")}>
            HOME
          </button>
          <button className="nav-button" onClick={() => setPage("Shows")}>
            SHOWS
          </button>
          <button className="nav-button" onClick={() => setPage("About")}>
            ABOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuBar;

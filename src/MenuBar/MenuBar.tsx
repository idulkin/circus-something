import React, { useEffect, useState } from "react";

import "./MenuBar.css";

interface MenuBarProps {
  width: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const MenuBar: React.FC<MenuBarProps> = ({ width }) => {
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
      <hr />

      {showMenu && (
        <div className="nav-container">
          <button className="nav-button">HOME</button>
          <button className="nav-button">SHOWS</button>
          <button className="nav-button">ABOUT</button>
        </div>
      )}
    </div>
  );
};

export default MenuBar;

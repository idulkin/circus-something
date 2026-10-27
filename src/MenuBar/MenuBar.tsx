import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MenuBar.css";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.75 6.8 5.2 6.8-5.2H5.2Zm13.55 2.08-6.35 4.85a1 1 0 0 1-1.2 0L5.25 8.08v9.17c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75V8.08Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

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

      <div className="social-links" aria-label="External social links">
        <a
          className="social-link"
          href="mailto:someone@circussomething.com"
          aria-label="Email circus something"
          title="Email circus something"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/circus.something/"
          aria-label="Circus Something on Instagram"
          title="Circus Something on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          className="social-link"
          href="https://www.youtube.com/@CircusSomething"
          aria-label="Circus Something on YouTube"
          title="Circus Something on YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>
      </div>
    </div>
  );
};

export default MenuBar;

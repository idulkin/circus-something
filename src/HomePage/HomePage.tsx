import React from "react";
import CS_logo_only from "../assets/CS_logo_only.png";
import title_logo from "../assets/cs-final-logotype-white_orig.png";
import Patreon from "../assets/Patreon.png";
import Intensive from "../assets/Performance Intensive.png";
import Page1 from "../assets/TLN2024Program/1.png";
import Page2 from "../assets/TLN2024Program/2.png";
import Page3 from "../assets/TLN2024Program/3.png";
import Page4 from "../assets/TLN2024Program/4.png";
import Page5 from "../assets/TLN2024Program/5.png";
import Page6 from "../assets/TLN2024Program/6.png";
import Page7 from "../assets/TLN2024Program/7.png";

import MenuBar from "../MenuBar/MenuBar";
import "./HomePage.css";
import CultSignup from "../CultSignup/CultSignup";
import Carousel from "react-multi-carousel";

interface HomePageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [showProgramModal, setShowProgramModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowProgramModal(true);
  };

  const handleCloseModal = () => {
    setShowProgramModal(false);
  };

  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar setPage={setPage} />
      </div>
      <div className="page-container">
        <div className="title-container">
          <img src={title_logo} className="title-logo" alt="Circus Something" />
          <h2 className="subtitle">Avant-garde ritual circus theater</h2>
        </div>
        <div className="description-container">
          <div className="ticket-container">
            <a
              href="https://circussomething.ticketspice.com/the-longest-day-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ticket-button">
                TICKETS FOR THE LONGEST DAY
              </button>
            </a>
          </div>
          <a
            href="https://www.patreon.com/circussomething"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Patreon} style={{ width: "50%" }} />
          </a>
          <p></p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfouSMrpCwNwHeFcolQatJWdDXY53XrqQOBWoUgp-7RkdUY4Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Intensive} style={{ width: "50%" }} />
          </a>

          <p className="text-white">
            What if the light was not what you thought it was? Light sparkles
            and shines, burns and blinds. Light can be beautiful and misleading.
            White is not always good, honest, and innocent. Bright is not always
            warm and welcoming.
          </p>
          <p className="text-white">What is your light?</p>
          <p className="text-red">
            Slithering from the depths of uncertainty and beauty, Circus
            Something presents a tech forward illusionary circus show designed
            to take audiences on a sensory stimulating journey through light and
            shadow, reality and hallucination.
          </p>
          <p className="text-white">
            Proudly showcasing some of the most talented performers in The Bay
            Area and hosting delightfully blinding artists from around the
            country! With new performances, original concepts, choreography,
            costuming, and design by Ash and Igor, in collaboration with our
            outstanding cast.
          </p>
          <div className="row-container">
            <p className="text-column">
              Wife and husband duo Ash and Igor bring to you something…
              otherworldly and vaguely threatening.
            </p>
            <div className="image-column">
              <img
                src={CS_logo_only}
                className="logo"
                alt="Circus Something logo"
              />
              <img src={title_logo} className="logo" alt="Circus Something" />
            </div>
            <p className="text-column">
              Circus Something is an Avant Garde ritual circus theater
              production company dedicated to creating a welcoming space for
              dark and contemporary circus and theatrical performance. Our tech
              forward, illusionary productions are more than shows, they are
              multi-sensory experiences.
            </p>
          </div>
        </div>
        <CultSignup />
      </div>
    </div>
  );
};

export default HomePage;

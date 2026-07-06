import React, { useState } from "react";
import CS_logo_only from "../assets/CS_logo_only.png";
import title_logo from "../assets/cs-final-logotype-white_orig.png";
import Patreon from "../assets/Patreon.png";
import TLD1 from "../assets/TLD2026Program/1.png";
import TLD2 from "../assets/TLD2026Program/2.png";
import TLD3 from "../assets/TLD2026Program/3.png";
import TLD4 from "../assets/TLD2026Program/4.png";
import TLD5 from "../assets/TLD2026Program/5.png";
import TLD6 from "../assets/TLD2026Program/6.png";
import TLD7 from "../assets/TLD2026Program/7.png";
import ImageCarousel from "../Components/Program/ImageCarousel";

import MenuBar from "../MenuBar/MenuBar";
import TicketCTA from "../Components/TicketCTA/TicketCTA";
import "./HomePage.css";
import CultSignup from "../CultSignup/CultSignup";

const HomePage: React.FC = () => {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const tld2026Program = [TLD1, TLD2, TLD3, TLD4, TLD5, TLD6, TLD7];

  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar />
      </div>
      <div className="page-container">
        <div className="title-container">
          <img src={title_logo} className="title-logo" alt="Circus Something" />
          <h2 className="subtitle">Avant-garde ritual circus theater</h2>
        </div>
        <div className="description-container">
          {/* <div className="program-container">
            <button
              className="program-button"
              onClick={() => setIsProgramOpen(true)}
            >
              THE LONGEST DAY 2026 PROGRAM
            </button>
            <ImageCarousel
              images={tld2026Program}
              isOpen={isProgramOpen}
              onClose={() => setIsProgramOpen(false)}
            />
          </div> */}

          {/* <TicketCTA
            href="https://circussomething.ticketspice.com/the-longest-day-addiction"
            label="TICKETS FOR THE LONGEST DAY"
          /> */}
          {/* <a
            className={`intensive-card${flipped ? " flipped" : ""}`}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdWNUC3FZd0YORMkNxtsalRoNSd8fMcR9z7stHJdAf8iNdxjg/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!flipped) {
                e.preventDefault();
                setFlipped(true);
              }
            }}
          >
            <img src={IntensiveFront} className="intensive-front" alt="Intensive show poster - front" />
            <img src={IntensiveBack} className="intensive-back" alt="Intensive show poster - back" />
            <span className="intensive-tap-hint">{flipped ? "Tap to open" : "Tap to reveal"}</span>
          </a>
          <hr className="section-divider" /> */}
          <div className="patreon-container">
            <a
              href="https://www.patreon.com/circussomething"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Patreon}
                className="patreon-image"
                alt="Support us on Patreon"
              />
            </a>
            <p className="text-red patreon-text">
              The cult demands sacrifice. What are you willing to give? Your
              support ensures that we continue to bring you the highest level of
              theatrical occult indoctrination.
            </p>
          </div>
          <hr className="section-divider" />
          <p></p>
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
      </div>
      <CultSignup />
    </div>
  );
};

export default HomePage;

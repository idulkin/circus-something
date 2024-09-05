import React from "react";

import masksOff from "../assets/masksOff.png";
import masksOn from "../assets/masksOn.png";

import MenuBar from "../MenuBar/MenuBar";
import "./AboutPage.css";

interface AboutPageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const AboutPage: React.FC<AboutPageProps> = ({ setPage }) => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <MenuBar setPage={setPage} />
      </div>
      <div className="content-container">
        <h2 className="title">ABOUT THE CREATORS</h2>
        <p className="text">
          Wife and husband duo Ash and Igor bring to you something… otherworldly
          and vaguely threatening.{" "}
        </p>
        <div className="description-container">
          <div className="about-container">
            <img src={masksOff} alt="Ash & Igor masks off" />
            <div className="description">
              <h2 className="title">ASH REX SOMETHING</h2>
              <p className="text">
                Ash Rexford is a clown, contortionist, dancer, and movement
                artist. Since 2010 Ash has been performing on stages from
                theaters to festivals, choreographing solos and ensembles,
                developing characters, designing costumes, directing, producing,
                and traveling the world sharing her passion for performance.
                Starting as a dancer and a natural on stage, Ash always dreamed
                of being a modern circus performer but never believed it was
                possible. In 2015 after 6 seasons with SLO Tease Burlesque,
                performing and choreographing circus acts for Suspended Motion
                Aerial Academy, and performances across the United States with
                Cirque Des Bêtes, Ash changed her career to pursue circus and
                performing arts full time with a focus on teaching and blending
                her various movement backgrounds into one with her technique,
                Slither.
              </p>
            </div>
          </div>
          <div className="about-container">
            <div className="description">
              <h2 className="title">IGOR DULKIN SOMETHING</h2>
              <p className="text">
                The Magister of Spheres, Igor started performing in circus shows
                as a contact juggler and fire dancer in San Luis Obispo in 2015.
                His training started at Suspended Motion where he studied
                aerial, dance, and character work. He traveled with the
                steampunk circus troupe Cirque des Bêtes and performed at events
                around California and Arizona. After moving to San Francisco, he
                began working on shows as a stagehand, stage manager, and
                production assistant on Steve Smith's Cabaret at the San
                Francisco Circus Center. Igor has since branched out as a stage
                lighting designer and LED prop engineer. He daylights as a
                software engineer, having graduated from Cal Poly, San Luis
                Obispo with a degree in computer engineering. Now based in
                Oakland, he is excited to design and create multi-sensory
                experiences for you as Circus Something's Technical Director.
              </p>
            </div>
            <img src={masksOn} alt="Ash & Igor masks off" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

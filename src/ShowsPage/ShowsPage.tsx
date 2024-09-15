import React from "react";

import LongestDay2024 from "../assets/LongestDay2024.png";
import LongestNight2024 from "../assets/LongestNight2024.png";
import LongestNight2024Ritual from "../assets/LongestNight2024Ritual.png";
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
        <div className="page-container">
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
          <div className="show-description">
            <div className="column">
              <p className="text">
                Spire the Church in West Oakland truly welcomed the circus for
                The Longest Day and we cannot thank them enough for trusting us
                with their space. Our Cultists and audience showed up filling
                every seat in the house with style and rapture. Our talented
                cast of artists sacrificed, cried, burned, and died for this
                show, for you! Our supporters, lovers, friends, enemies and
                fans.{" "}
              </p>
              <p className="text">
                Don't forget, the magic is only real because you believe.{" "}
              </p>
              <p className="text">
                See the pictures from the show by our incredible photographer
                Gloria at Fire Dragon Photography, she's really much better than
                you on your phone:
              </p>
              <a
                className="link"
                href="https://firedragonphotography.pixieset.com/longestday-saturday/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pictures from The Longest Day 2024
              </a>
            </div>
            <div className="column">
              <img
                src={LongestDay2024}
                className="image"
                alt="Longest Day 2024 Cast Photo"
              />
            </div>
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

          <div className="show-description">
            <div className="column">
              <img
                src={LongestNight2024}
                className="image"
                alt="Longest Night 2023 Cast Photo"
              />
            </div>
            <div className="column">
              <p className="text">
                Our debut show The Longest Night was a hit! Both shows sold out,
                audiences were moved, and artists rejoiced. Endless thanks to
                all of our artists, supporters, lovers, friends, and fans.{" "}
              </p>
              <p className="text">
                Don't forget, the magic is only real because you believe.{" "}
              </p>
              <p className="text">
                Check out pictures from the show by our incredible photographer
                Maeve at Fire Dragon Photography:
              </p>
              <a
                className="link"
                href="https://firedragonphotography.pixieset.com/thelongestnight/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pictures from The Longest Night 2023
              </a>
            </div>
          </div>

          <img
            src={LongestNight2024Ritual}
            className="bottom-image"
            alt="Longest Night 2023 Cast Ritual"
          />
        </div>
        <CultSignup />
      </div>
    </div>
  );
};

export default ShowsPage;

// ... (keep existing imports and add:)
import React from "react";

import LongestDay2024 from "../assets/LongestDay2024.png";
import LongestNight2024 from "../assets/LongestNight2024.png";
import TheLongestNight2024 from "../assets/TheLongestNight2024.jpg";
import LongestNight2024Ritual from "../assets/LongestNight2024Ritual.png";
import MenuBar from "../MenuBar/MenuBar";
import "./ShowsPage.css";
import CultSignup from "../CultSignup/CultSignup";
import ShowDescription from "../Components/ShowDescription/ShowDescription";

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
          <ShowDescription
            title="THE LONGEST NIGHT 2024"
            videoUrl="https://www.youtube.com/embed/hVq64WwAlXM"
            description={[
              "In December 2024, Dance Mission Theater in San Francisco welcomed Circus Something for our second The Longest Night. In the cold and dark of winter, we gathered to celebrate the beauty of the night. Angels, demons, vampires, and shades, all united to bring forth the majesty of darkness. ",
              "Glimpse a taste of the magic as captured by the incomparable Gloria of Fire Dragon Photography:",
            ]}
            imageUrl={TheLongestNight2024}
            imageAlt="Longest Night 2024 Cast"
            photoLink="https://firedragonphotography.pixieset.com/thelongestnight-openingnight/"
            photoLinkText="Pictures from The Longest Night 2024"
            imagePosition="left"
          />

          <ShowDescription
            title="THE LONGEST DAY 2024"
            videoUrl="https://www.youtube.com/embed/DSkumonmxbE"
            description={[
              "Spire the Church in West Oakland truly welcomed the circus for The Longest Day and we cannot thank them enough for trusting us with their space. Our Cultists and audience showed up filling every seat in the house with style and rapture. Our talented cast of artists sacrificed, cried, burned, and died for this show, for you! Our supporters, lovers, friends, enemies and fans.",
              "Don't forget, the magic is only real because you believe.",
              "See the pictures from the show by our incredible photographer Gloria at Fire Dragon Photography, she's really much better than you on your phone:",
            ]}
            imageUrl={LongestDay2024}
            imageAlt="Longest Day 2024 Cast"
            photoLink="https://firedragonphotography.pixieset.com/longestday-saturday/"
            photoLinkText="Pictures from The Longest Day 2024"
            imagePosition="right"
          />

          <ShowDescription
            title="THE LONGEST NIGHT 2023"
            videoUrl="https://www.youtube.com/embed/WJ3d_28mQr4"
            description={[
              "Our debut show The Longest Night was a hit! Both shows sold out, audiences were moved, and artists rejoiced. Endless thanks to all of our artists, supporters, lovers, friends, and fans.",
              "Don't forget, the magic is only real because you believe.",
              "Check out pictures from the show by our incredible photographer Maeve at Fire Dragon Photography:",
            ]}
            imageUrl={LongestNight2024}
            imageAlt="Longest Night 2023 Cast"
            photoLink="https://firedragonphotography.pixieset.com/thelongestnight/"
            photoLinkText="Pictures from The Longest Night 2023"
            imagePosition="left"
          />

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

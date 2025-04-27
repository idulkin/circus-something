import React from "react";
import ImageCarousel from "../Program/ImageCarousel";

interface ShowDescriptionProps {
  title: string;
  videoUrl: string;
  description: string[];
  imageUrl: string;
  imageAlt: string;
  photoLink?: string;
  photoLinkText?: string;
  imagePosition?: "left" | "right";
  showProgram?: any[];
}

const ShowDescription: React.FC<ShowDescriptionProps> = ({
  title,
  videoUrl,
  description,
  imageUrl,
  imageAlt,
  photoLink,
  photoLinkText,
  imagePosition = "right",
}) => {
  const textColumn = (
    <div className="column">
      {description.map((paragraph, index) => (
        <p key={index} className="text">
          {paragraph}
        </p>
      ))}
      {photoLink && (
        <a
          className="link"
          href={photoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {photoLinkText}
        </a>
      )}
    </div>
  );

  const imageColumn = (
    <div className="column">
      <img src={imageUrl} className="image" alt={imageAlt} />
    </div>
  );

  //   const programColumn = (
  //     <div className="column">
  //       <ImageCarousel program={showProgram} />
  //     </div>
  //   );

  return (
    <div>
      <h2 className="sub-title">{title}</h2>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="show-description">
        {imagePosition === "right" ? (
          <>
            {textColumn}
            {imageColumn}
          </>
        ) : (
          <>
            {imageColumn}
            {textColumn}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowDescription;

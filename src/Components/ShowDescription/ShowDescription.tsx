import React, { useState } from "react";
import ImageCarousel from "../Program/ImageCarousel";
import "./ShowDescription.css";

interface ShowDescriptionProps {
  title: string;
  videoUrl: string;
  description: string[];
  imageUrl: string;
  imageAlt: string;
  photoLink?: string;
  photoLinkText?: string;
  imagePosition?: "left" | "right";
  showProgram?: string[];
  programTitle?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
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
  showProgram = [],
  programTitle,
  isExpanded = true,
  onToggle,
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const programColumn = (
    <div className="program-container">
      <button className="program-button" onClick={() => setIsModalOpen(true)}>
        {programTitle}
      </button>

      <ImageCarousel
        images={showProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );

  return (
    <div>
      <h2
        className="sub-title"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (onToggle && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onToggle();
          }
        }}
        tabIndex={onToggle ? 0 : undefined}
        role={onToggle ? "button" : undefined}
        aria-expanded={onToggle ? isExpanded : undefined}
        style={{
          cursor: onToggle ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{title}</span>
        {onToggle && (
          <span
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              fontSize: "0.8em",
            }}
          >
            ▼
          </span>
        )}
      </h2>
      {isExpanded && (
        <>
          <div className="video-container">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="show-description">
            {imagePosition === "right" ? (
              <>
                <div className="column">
                  {textColumn}
                  {programTitle && programColumn}
                </div>
                {imageColumn}
              </>
            ) : (
              <>
                {imageColumn}
                <div className="column">
                  {textColumn}
                  {programTitle && programColumn}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowDescription;

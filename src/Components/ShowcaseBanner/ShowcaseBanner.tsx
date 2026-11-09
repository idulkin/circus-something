import React from "react";
import { Link } from "react-router-dom";
import "./ShowcaseBanner.css";

type ShowcaseBannerProps = {
  image: string;
  imageAlt: string;
  caption: React.ReactNode;
  href: string;
  linkLabel: string;
};

const ShowcaseBanner: React.FC<ShowcaseBannerProps> = ({
  image,
  imageAlt,
  caption,
  href,
  linkLabel,
}) => (
  <div className="showcase-banner">
    <img
      src={image}
      alt={imageAlt}
      className="showcase-banner-image"
      loading="lazy"
    />
    <div className="showcase-banner-overlay">
      <p className="showcase-banner-caption">{caption}</p>
      <Link className="showcase-banner-link" to={href}>
        {linkLabel}
      </Link>
    </div>
  </div>
);

export default ShowcaseBanner;

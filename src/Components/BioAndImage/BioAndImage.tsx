import React, { useEffect, useState } from "react";
import "./BioAndImage.css"; // Ensure this CSS file is properly imported

interface BioAndImageProps {
  image: string;
  name: string;
  description: string;
  imageRightOfText?: boolean;
}

const BioAndImage: React.FC<BioAndImageProps> = ({
  image,
  name,
  description,
  imageRightOfText = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arrangeRight = isMobile || imageRightOfText;

  return (
    <div className={`bio-and-image`}>
      {!arrangeRight && <img src={image} alt={name} className="bio-image" />}
      <div className="bio-text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      {arrangeRight && <img src={image} alt={name} className="bio-image" />}
    </div>
  );
};

export default BioAndImage;

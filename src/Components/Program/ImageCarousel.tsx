import React, { useState } from "react";
import "./ImageCarousel.css";

interface ImageCarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ImageCarousel = ({ images, isOpen, onClose }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="carousel-container">
          <button className="nav-button prev" onClick={handlePrevious}>
            &#8249;
          </button>

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />

          <button className="nav-button next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

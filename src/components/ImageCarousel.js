import React, { useState } from 'react'
import './ImageCarousel.css'

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevious = () => {
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(previousIndex)
  }

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1 + images.length) % images.length
    setCurrentImageIndex(nextIndex)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <img src={images[currentImageIndex]} alt="carousel" /> {/* Use the current image based on the index */}
      </div>
      <div className="carousel-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default ImageCarousel
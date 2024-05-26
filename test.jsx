import React, { useState, useEffect } from 'react';
import './test.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [1, 2, 3, 4, 5, 6]; // Your data for the carousel

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={goToPrev}>Prev</button>
      <div className="carousel">
        {data.map((item, index) => {
          let position = index - currentIndex;
          const totalItems = data.length;
          
          // Handle endless loop
          if (position < 0) position += totalItems;

          const scaleFactor = position === 0 ? 1 : 0.5;
          const opacity = position === 0 ? 1 : 0.5;

          return (
            <div
              key={index}
              className="carousel-item"
              style={{
                transform: `translateX(${position * 100}%) scale(${scaleFactor})`,
                opacity: opacity,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default Carousel;

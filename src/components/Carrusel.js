import React, { useState, useEffect } from "react";

export function Carrusel({ imageArray }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  console.log(imageArray, "dentro del carrusel");

  return (
    <section className="relative h-[80vh] w-full md:w-[1000px] overflow-hidden">
      <div className="relative h-full">
        {imageArray.map((e, index) => (
          <div className="flex flex-col" key={index}>
            <img
              src={e.image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-end">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
    </section>
  );
}

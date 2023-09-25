import React, { useState } from "react";
// Импортируйте файл стилей для вашей карусели
import "../css/check.scss";

function Check() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://via.placeholder.com/800x400?text=Slide+1",
      caption: "Описание первого слайда",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+2",
      caption: "Описание второго слайда",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+3",
      caption: "Описание третьего слайда",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevSlide}>
        &lt; Предыдущий
      </button>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={nextSlide}>
        Следующий &gt;
      </button>
    </div>
  );
}

export default Check;

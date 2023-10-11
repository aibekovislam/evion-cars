import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Импорт стилей карусели
import "../css/details.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Ura() {
  const settings = {
    showArrows: true, // Показать стрелки
    infiniteLoop: true, // Бесконечный цикл
    showThumbs: false, // Не показывать миниатюры
    useKeyboardArrows: true, // Использовать клавиши клавиатуры для навигации
    autoPlay: true, // Автоматическое воспроизведение
    interval: 5000,
    stopOnHover: true, // Остановка автоматического воспроизведения при наведении мыши
    showStatus: false, // Показывать статус (номер текущего слайда)
    showIndicators: false, // Показывать индикаторы (точки)
    dynamicHeight: false, // Динамическая высота слайдов
    swipeable: true, // Включить свайп на мобильных устройствах
    emulateTouch: true, // Эмулировать касание для десктопных устройств
    showThumbs: false, // Не показывать миниатюры
    renderArrowPrev: (clickHandler, hasPrev, label) => (
      <div
        onClick={clickHandler}
        title={label}
        type="button"
        className="details-arrow-prev"
      >
        <AiOutlineArrowLeft />
      </div>
    ),
    renderArrowNext: (clickHandler, hasNext, label) => (
      <div
        onClick={clickHandler}
        title={label}
        type="button"
        className="details-arrow-next"
      >
        <AiOutlineArrowRight />
      </div>
    ),
  };

  return (
    <div>
      <Carousel {...settings}>
        <div className="images-carousel">
          <img
            src="https://www.topgear.com/sites/default/files/news-listicle/image/2023/01/1.jpeg?w=1654&h=930"
            alt="Изображение 1"
            className="array"
          />
        </div>
        <div className="images-carousel">
          <img
            src="https://i.pinimg.com/564x/89/e3/9f/89e39f7142f79ffd51212336c212d632.jpg"
            alt="Изображение 1"
            className="array"
          />
        </div>
        <div className="images-carousel">
          <img
            src="https://i.pinimg.com/564x/d0/bb/de/d0bbdec9c19404af576c4be454400a8f.jpg"
            alt="Изображение 1"
            className="array"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Ura;

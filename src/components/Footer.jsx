import React from "react";
import "../css/home.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="column-special">
            <img src="https://static.tildacdn.com/tild3164-3266-4761-a134-376461663933/2.svg" />
            <div className="logos">
              <FaFacebookSquare style={{ fontSize: "28px", color: "white" }} />
              <FaInstagramSquare style={{ fontSize: "28px", color: "white" }} />
              <FaLinkedin style={{ fontSize: "28px", color: "white" }} />
              <FaWhatsappSquare style={{ fontSize: "28px", color: "white" }} />
              <FaTelegram style={{ fontSize: "28px", color: "white" }} />
            </div>
            <div className="pen">
              2023 ⓒ Все права защищены.
              <br /> ОсОО «EVION»
            </div>
          </div>
          <div className="column">
            <div className="green-pen">
              <div className="pen">Розничным сетям</div>
              <div className="pen">Гостиничному бизнесу</div>
              <div className="pen">АЗС</div>
              <div className="pen">Автопроизводителям и дилерам</div>
            </div>
          </div>
          <div className="column">
            <div className="green-pen">Автопаркам</div>
            <div className="pen">Объектам недвижимости</div>
            <div className="pen">Энергетическим компаниям</div>
            <div className="pen">Электромобилистам</div>
          </div>
          <div className="column">
            <div className="green-pen">Клиентам</div>
            <div className="pen">Оплата и доставка</div>
            <div className="pen">Гарантии и возвра</div>
            <div className="pen">Техническая поддержка</div>
          </div>
          <div className="column">
            <img
              className="application"
              src="https://static.tildacdn.com/tild3137-3063-4561-a563-633237656534/Google_play.svg"
            />
            <img
              className="application"
              src="https://static.tildacdn.com/tild3232-3564-4535-b136-383035623338/App_Store.svg"
            />
            <div className="pen-grey">Обработка персональных данных</div>
          </div>
          <div className="column">
            <div className="green-pen">Продукт</div>
            <div className="pen">Зарядные станции</div>
            <div className="pen">Мобильные приложения</div>
            <div className="pen">Система управления</div>
            <div className="pen">Балансировка мощности</div>
            <div className="pen">Зарядка как сервис</div>
            <div className="pen">Каталог товаров</div>
            <div className="pen-grey">Политика конфиденциальности</div>
          </div>
          <div className="column">
            <div className="green-pen">Партнерство</div>
            <div className="pen">Франшиза</div>
            <div className="pen">Дистрибьюторам и установщикам</div>
            <div className="pen">Бесплатное размещение зарядных станций</div>
            <div className="pen-grey">Условия использования приложения</div>
          </div>
          <div className="column">
            <div className="green-pen">Ресурсы</div>
            <div className="pen">Блог</div>
            <div className="pen">Калькулятор окупаемости</div>
            <div className="green-pen">Мы</div>
            <div className="pen">О нас</div>
            <div className="pen">Принципы компании</div>
            <div className="pen-grey">Файлы cookie</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

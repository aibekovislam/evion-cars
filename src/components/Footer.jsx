import React from "react";
import "../css/home.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logo from "../css/images/2.svgevionlogo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-container-more">
            <div className="column-special">
              <a href="/">
                <img src={logo} style={{ filter: "brightness(0%)" }} />
              </a>

              <div className="logos">
                <a href="#">
                  <FaFacebookSquare
                    style={{ fontSize: "28px", color: "black" }}
                  />
                </a>
                <a href="https://www.instagram.com/evion_kg/?utm_source=qr">
                  <FaInstagramSquare
                    style={{ fontSize: "28px", color: "black" }}
                  />
                </a>
                <a href="">
                  <FaLinkedin style={{ fontSize: "28px", color: "black" }} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=996500333351&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5">
                  <FaWhatsappSquare
                    style={{ fontSize: "28px", color: "black" }}
                  />
                </a>
                <a href="https://t.me/evion_chat_bot">
                  <FaTelegram style={{ fontSize: "28px", color: "black" }} />
                </a>
              </div>
              <div className="pen">
                2023 ⓒ Все права защищены.
                <br /> ОсОО «EVION»
              </div>
            </div>
            <div className="column">
              <div className="green-pen">
                <a href="https://evion.kg/biznesu#!/tab/627586155-1">
                  <div className="pen">Розничным сетям</div>
                </a>
                <a href="https://evion.kg/biznesu#!/tab/627586155-2">
                  <div className="pen">Гостиничному бизнесу</div>
                </a>
                <a href="https://evion.kg/biznesu#!/tab/627586155-3">
                  <div className="pen">АЗС</div>
                </a>
                <a href="https://evion.kg/biznesu#!/tab/627586155-4">
                  <div className="pen">Автопроизводителям и дилерам</div>
                </a>
              </div>
            </div>
            <div className="column">
              <a href="https://evion.kg/avtoparkam">
                <div className="green-pen">Автопаркам</div>
              </a>
              <a href="https://evion.kg/zastroyshikam">
                <div className="pen">Объектам недвижимости</div>
              </a>
              <a href="https://evion.kg/energeticheskimcompanyam">
                <div className="pen">Энергетическим компаниям</div>
              </a>
              <a href="">
                <div className="pen">Электромобилистам</div>
              </a>
            </div>
            <div className="column">
              <a href="">
                <div className="green-pen">Клиентам</div>
              </a>
              <a href="">
                <div className="pen">Оплата и доставка</div>
              </a>
              <a href="">
                <div className="pen">Гарантии и возвра</div>
              </a>
              <a href="">
                <div className="pen">Техническая поддержка</div>
              </a>
            </div>
          </div>

          <div className="footer-container-more-more">
            <div className="column">
              <img
                className="application"
                style={{ filter: "brightness(0%)" }}
                src="https://static.tildacdn.com/tild3137-3063-4561-a563-633237656534/Google_play.svg"
              />
              <img
                className="application"
                style={{ filter: "brightness(0%)" }}
                src="https://static.tildacdn.com/tild3232-3564-4535-b136-383035623338/App_Store.svg"
              />
              <a href="">
                <div className="pen-grey">Обработка персональных данных</div>
              </a>
            </div>
            <div className="column">
              <a href="">
                <div className="green-pen">Продукт</div>
              </a>
              <a href="https://evion.kg/zaryadnyestancii">
                <div className="pen">Зарядные станции</div>
              </a>
              <a href="https://evion.kg/setstanciy">
                <div className="pen">Мобильные приложения</div>
              </a>
              <a href="https://evion.kg/po">
                <div className="pen">Система управления</div>
              </a>
              <a href="https://evion.kg/balancirovkamoshnosti">
                <div className="pen">Балансировка мощности</div>
              </a>
              <a href="https://evion.kg/uslugizaryadkikakservice">
                <div className="pen">Зарядка как сервис</div>
              </a>
              <a href="https://evion.kg/catalog">
                <div className="pen">Каталог товаров</div>
              </a>
              <a href="https://evion.kg/privacy_policy">
                <div className="pen-grey">Политика конфиденциальности</div>
              </a>
            </div>
            <div className="column">
              <a href="">
                <div className="green-pen">Партнерство</div>
              </a>
              <a href="https://evion.kg/franchiza">
                <div className="pen">Франшиза</div>
              </a>
              <a href="">
                <div className="pen">Дистрибьюторам и установщикам</div>
              </a>
              <a href="">
                <div className="pen">
                  Бесплатное размещение зарядных станций
                </div>
              </a>
              <a href="https://evion.kg/terms_of_use">
                <div className="pen-grey">Условия использования приложения</div>
              </a>
            </div>
            <div className="column">
              <a href="">
                <div className="green-pen">Ресурсы</div>
              </a>
              <a href="https://evion.kg/blog">
                <div className="pen">Блог</div>
              </a>
              <a href="https://evion.kg/calculator">
                <div className="pen">Калькулятор окупаемости</div>
              </a>
              <a href="">
                <div className="green-pen">Мы</div>
              </a>
              <a href="https://evion.kg/onas">
                <div className="pen">О нас</div>
              </a>
              <a href="https://evion.kg/8osnovevion">
                <div className="pen">Принципы компании</div>
              </a>
              <a href="https://evion.kg/cookie">
                <div className="pen-grey">Файлы cookie</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

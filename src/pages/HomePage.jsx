import React, { useEffect, useState, useRef } from "react";
import "../css/home.scss";
// import Categories from "../css/images/Frame 2084.png";
import Map from "../components/Map";
import Footer from "../components/Footer";

import "../css/car.css";

// pizda
import greenAliance from "../css/images/green.png";
import prosperity from "../css/images/prosp.png";
import greenEconomy from "../css/images/green-economy.png";
import halykBank from "../css/images/Group 373halyx.png";
import optima from "../css/images/Group 371optima.png";
import selo from "../css/images/Group 370selo.png";
import comerty from "../css/images/Group 369bank comert.png";
import kicb from "../css/images/Group 368kicb.png";
import dongfeng from "../css/images/Group 358dongfeng.png";
import uzor from "../css/images/Group 359uzor.png";
import byd from "../css/images/Group 360byd.png";
import v from "../css/images/Group 361v.png";
import bluesky from "../css/images/Group 366bluesky.png";
import polution from "../css/images/Group 365polution.png";
import yisen from "../css/images/Group 364yisen.png";
import esafe from "../css/images/Group 363easefe.png";
import conect from "../css/images/Group 408svyaz.png";
import gas from "../css/images/Group 407gas.png";
import nur from "../css/images/Group 406nur.png";
import akmEnergy from "../css/images/Group 405akm energy.png";
import pay24 from "../css/images/Group 343pay24.png";
import charg24 from "../css/images/Group 342charg24.png";
import cash from "../css/images/_2395947323392.svgevionkashi.png";
import car1 from "../css/images/car1.png";
import car2 from "../css/images/car2.png";
import car3 from "../css/images/car3.png";

// import { getImages, selectImages } from "../store/slices/imagesSlice";
import Slider1 from "../components/slider1";
import Card from "../components/Card";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../css/images/2.svgevionlogo.png";
import "../css/navbar.scss";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import axios from "axios";

function HomePage() {
  const navRef = useRef();
  const [zapasValue, setZapasValue] = useState(0);
  const [speedValue, setSpeedValue] = useState(0);
  const [powerValue, setPowerValue] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    // Начальные значения
    setZapasValue(0);
    setSpeedValue(0);
    setPowerValue(0);

    // Целевые значения
    const targetZapas = 550;
    const targetSpeed = 330;
    const targetPower = 350;

    const duration = 1500; // Продолжительность анимации в миллисекундах
    const steps = 60; // Количество шагов

    const zapasStep = targetZapas / steps;
    const speedStep = targetSpeed / steps;
    const powerStep = targetPower / steps;

    let currentZapas = 0;
    let currentSpeed = 0;
    let currentPower = 0;

    const interval = setInterval(() => {
      if (currentZapas < targetZapas) {
        currentZapas += zapasStep;
        setZapasValue(Math.round(currentZapas));
      }

      if (currentSpeed < targetSpeed) {
        currentSpeed += speedStep;
        setSpeedValue(Math.round(currentSpeed));
      }

      if (currentPower < targetPower) {
        currentPower += powerStep;
        setPowerValue(Math.round(currentPower));
      }

      if (
        currentZapas >= targetZapas &&
        currentSpeed >= targetSpeed &&
        currentPower >= targetPower
      ) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // async function getCarDetail() {
  //   try {
  //     const response = await axios.get(
  //       `https://evion-cars-api-a533851fe462.herokuapp.com/more_info/66370aae-3799-11ee-0a80-0e3300148d39`
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getCarDetail();
  // }, []);

  return (
    <>
      <div
        className={`main-image ${activeImage === "car1" ? "car1-active" : ""} ${
          activeImage === "car2" ? "car2-active" : ""
        } ${activeImage === "car3" ? "car3-active" : ""}`}
      >
        {/*  */}
        <div className="navbar-container">
          {/*  */}
          <nav ref={navRef}>
            <div className="idont">
              <ul className="navbar-nav">
                <li>
                  <a className="nav-item" href="#">
                    Для кого
                    <div className="dropdown">
                      <ul>
                        <li>
                          <a href="https://evion.kg/biznesu">Бизнесы</a>
                        </li>
                        <li>
                          <a href="https://evion.kg/avtoparkam">Автопаркам</a>
                        </li>
                        <li>
                          <a href="https://evion.kg/zastroyshikam">
                            Обектам недвижимости
                          </a>
                        </li>
                        <li>
                          <a href="https://evion.kg/energeticheskimcompanyam">
                            Энергетическим компаниям
                          </a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#">
                    Продукты
                    <div className="dropdown">
                      <ul>
                        <li>
                          <a href="https://evion.kg/catalog">Каталог товаров</a>
                        </li>
                        <li>
                          <a href="https://evion.kg/po">
                            Программное обеспечение
                          </a>
                        </li>
                        <li>
                          <a href="https://evion.kg/balancirovkamoshnosti">
                            Балансировка мощности
                          </a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="#">
                    Сеть станций
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="#">
                    Партнерство
                    <div className="dropdown">
                      <ul>
                        <li>
                          <a href="https://evion.kg/franchiza">Франшиза</a>
                        </li>
                        <li>
                          <a href="#">Размещение станций</a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="#">
                    Ресурсы
                    <div className="dropdown">
                      <ul>
                        <li>
                          <a href="https://evion.kg/uslugizaryadkikakservice">
                            Услуги зарядки как сервис
                          </a>
                        </li>
                        <li>
                          <a href="https://evion.kg/calculator">
                            Калькулятор окупаемости
                          </a>
                        </li>
                        <li>
                          <a href="https://evion.kg/blog">Блог</a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li>
                  <a className="nav-item" href="#">
                    Мы
                    <div className="dropdown">
                      <ul>
                        <li>
                          <a href="https://evion.kg/onas">О нас</a>
                        </li>
                        <li>
                          <a href="https://evion.kg/calculator">
                            Принципы компании
                          </a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>

          <a href="/">
            <img src={logo} className="logo-image" />
          </a>

          <div className="util">
            <div className="container-util">
              <TfiShoppingCart style={{ fontSize: "28px", color: "white" }} />
              <CiUser style={{ fontSize: "28px", color: "white" }} />
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}

        <div className="title-order">
          <h2>ЭЛЕКТРОМОБИЛИ</h2>
          <h3>В НАЛИЧИИ И НА ЗАКАЗ</h3>
        </div>

        <div className="first-component">
          <div className="info_car">
            <div className="info_car_item">
              <div className="big-number">{zapasValue}</div>
              <div className="small-number">ЗАПАС ХОДА</div>
            </div>
            <div className="info_car_item">
              <div className="big-number-special">{speedValue}</div>
              <div className="small-number">МАКСИМАЛЬНАЯ СКОРОСТЬ</div>
            </div>
            <div className="info_car_item">
              <div className="big-number">{powerValue}</div>
              <div className="small-number">ЛОШАДИННЫХ СИЛ</div>
            </div>
          </div>

          {/*  */}
          <div className="images_first">
            <img src={car1} onClick={() => setActiveImage("car1")} />
            <img src={car2} onClick={() => setActiveImage("car2")} />
            <img src={car3} onClick={() => setActiveImage("car3")} />
          </div>
        </div>
      </div>

      <div className="container-main-content">
        <div className="container-filter">
          <div className="filters">
            {/*  */}

            <div className="aigad">
              <input
                className="input-filter-1"
                type="text"
                placeholder="Марка"
              />
              <input
                className="input-filter"
                type="text"
                placeholder="Модель"
              />
              <input
                className="input-filter"
                type="text"
                placeholder="Поколение"
              />
            </div>
            <div className="aigad">
              <input
                className="input-filter-1"
                type="text"
                placeholder="Цена $ "
              />
              <input className="input-filter" type="text" placeholder="Год" />
              <input
                type="text"
                className="special-input-filter"
                placeholder="Кузов"
              />
              <input
                type="text"
                className="special-input-filter"
                placeholder="Топливо"
              />
            </div>
            <div className="aigad">
              <input
                className="input-filter-1"
                type="text"
                placeholder="Мощность квт"
              />
              <input
                className="input-filter"
                type="text"
                placeholder="Привод"
              />
            </div>

            <div className="button-filter">
              <button>Показать</button>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      <Card />

      <Slider1 />

      <Card />

      {/* <div className="title-ia">
        <h2>Информации</h2>
      </div> */}

      {/* <div className="container-info">
        <div className="info-box">
          <div className="title-info">
            Как и где купить новый <br /> электромобиль
          </div>
          <p>
            Ответ на этот вопрос неоднозначен
            <br /> и требует тщательного расчёта в <br />
            каждом конкретном случае.
          </p>
          <div className="more">Подробнее </div>
        </div>
        <div className="info-box">
          <div className="title-info">
            Электромобили выгоднее в эксплуатации, чем машины с ДВС — это
            правда?
          </div>
          <p>
            Легковые автомобили с бензиновым мотором в смешанном режиме город
            /пригород расходуют ...
          </p>
          <div className="more">Подробнее </div>
        </div>
        <div className="info-box">
          <div className="title-info">
            Где и как можно заряжать электромобили
          </div>
          <p>
            При заправке обычного автомобиля главное правило — выбрать
            проверенную АЗС, чтобы заправляться качественным топливом.
          </p>
          <div className="more">Подробнее </div>
        </div>
      </div> */}

      <div className="map-container">
        <h2>Карты зарядок</h2>
        <Map />
      </div>

      <div className="container-absolute">
        <div className="title-absolute">
          <h2>Нужна консультация?</h2>
          <a href="https://t.me/evion_chat_bot">
            <button>Связаться</button>
          </a>
        </div>
      </div>

      <div className="almost-container">
        <div className="collab">
          <div className="collab-container">
            <div className="company"></div>

            <div className="title-h2">
              <h2>Партнеры по развитии зеленой экономики и принципам ESG</h2>
            </div>
            <div className="company">
              <img src={greenAliance} alt="" />
              <img src={prosperity} alt="" />
              <img src={greenEconomy} alt="" />
              <img src={halykBank} alt="" />
            </div>
            <div className="title-h2">
              <h2>Партнеры по финансовым вопросам</h2>
            </div>
            <div className="company">
              <img src={optima} alt="" />
              <img src={selo} alt="" />
              <img src={comerty} alt="" />
              <img src={kicb} alt="" />
            </div>
            <div className="title-h2">
              <h2>Партнеры по поставке электромобилей</h2>
            </div>
            <div className="company">
              <img src={dongfeng} alt="" />
              <img src={uzor} alt="" />
              <img src={byd} alt="" />
              <img src={v} alt="" />
            </div>
            <div className="title-h2">
              <h2>Партнеры по поставке электромобилей</h2>
            </div>
            <div className="company">
              <img src={bluesky} alt="" />
              <img src={polution} alt="" />
              <img src={yisen} alt="" />
              <img src={esafe} alt="" />
            </div>
            <div className="title-h2">
              <h2>Партнеры линии ГЭС и поставщики электроэнергии</h2>
            </div>
            <div className="company">
              <img src={conect} alt="" />
              <img src={gas} alt="" />
              <img src={nur} alt="" />
              <img src={akmEnergy} alt="" />
            </div>
            <div className="title-h2">
              <h2>Партнеры по приему платежей</h2>
            </div>
            <div className="company">
              <img src={pay24} alt="" />
              <img src={charg24} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="china">
        <div className="china-container">
          <img src={cash} />
          <div className="title-china">
            <h2>KASHI 喀什地区</h2>
            <p>
              Компания EVION ведет работу по открытию мини-завода по сборке
              <br />
              электротранспорта и ЭЗС в СЭЗ Кашгар «EVION KASHI» на территории
              <br />
              КНР.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;

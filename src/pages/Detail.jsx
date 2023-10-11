import React, { useRef } from "react";
import "../css/navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../css/images/2.svgevionlogo.png";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import logoBlack from "../css/images/logoBlack.png";
import Ura from "../components/Ura";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

function Detail() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
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
            <FaTimes style={{ color: "white" }} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars style={{ color: "black" }} />
        </button>

        <a href="/">
          <img src={logoBlack} className="logo-image" />
        </a>

        <div className="util">
          <div className="container-util">
            <TfiShoppingCart style={{ fontSize: "28px", color: "black" }} />
            <CiUser style={{ fontSize: "28px", color: "black" }} />
          </div>
        </div>
        {/*  */}
      </div>

      <div className="container-detail">
        <div className="main-detail">
          {/*  */}

          <div className="detail-left">
            <div className="details-info">
              <div>
                <div className="name-detail">TESLA MODEL Y</div>
                <div className="year-detail">2019</div>
                <div className="price-detail">35 000$</div>
              </div>
            </div>
            {/*  */}

            <div className="image-detail">
              <img src="https://www.topgear.com/sites/default/files/2022/07/18.jpg?w=1654&h=930" />
            </div>

            <div className="carosel-detail">
              <div>
                <Ura />
              </div>
            </div>

            <div className="more-info-container">
              <div className="more-info">
                {/*  */}
                <div className="boldy">
                  <li>Пробег</li>
                  <li>1 км</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Кузов</li>
                  <li>Внедорожник</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Цвет</li>
                  <li>Черный</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Двигатель</li>
                  <li>311 кВт</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Руль</li>
                  <li>Левый</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Состояние</li>
                  <li>Отличное</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Таможня</li>
                  <li>Растаможен</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Запас хода</li>
                  <li>550км</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy">
                  <li>Макс скорость</li>
                  <li>300 км/ч</li>
                </div>
                <div className="target_line">
                  <span className="target-line_span"></span>
                </div>
                {/*  */}

                {/*  */}
                <div className="boldy-special">
                  <li>Лошадиных Сил</li>
                  <li> 350</li>
                </div>

                {/*  */}
              </div>
            </div>

            {/*  */}
          </div>

          {/*  */}
          {/*  */}

          <div className="detail-right">
            {/*  */}

            <div className="rec-container">
              <div className="detail-column">
                <div className="rec">
                  <div className="rec-title">
                    <li>TESLA ROADSTER</li>
                    <li>2023</li>
                    <li>38 000$</li>
                    <li>Привод полный</li>
                    <li>Батарея 65 кВт</li>
                    <li>Белый</li>
                    <li>Пробег 320 км</li>
                    <li>Запас хода 520 км</li>
                    <li>Салон велюр</li>
                  </div>
                  <div className="rec-image">
                    <img
                      src="https://luxurylondon.co.uk/wp-content/uploads/2022/08/best-supercars-2021-03-2930x2198-c-center.jpg"
                      className="rec-img"
                    />
                  </div>
                </div>
                <div className="rec">
                  <div className="rec-title">
                    <li>TESLA ROADSTER</li>
                    <li>2023</li>
                    <li>38 000$</li>
                    <li>Привод полный</li>
                    <li>Батарея 65 кВт</li>
                    <li>Белый</li>
                    <li>Пробег 320 км</li>
                    <li>Запас хода 520 км</li>
                    <li>Салон велюр</li>
                  </div>
                  <div className="rec-image">
                    <img
                      src="https://luxurylondon.co.uk/wp-content/uploads/2022/08/best-supercars-2021-03-2930x2198-c-center.jpg"
                      className="rec-img"
                    />
                  </div>
                </div>
                <div className="rec">
                  <div className="rec-title">
                    <li>TESLA ROADSTER</li>
                    <li>2023</li>
                    <li>38 000$</li>
                    <li>Привод полный</li>
                    <li>Батарея 65 кВт</li>
                    <li>Белый</li>
                    <li>Пробег 320 км</li>
                    <li>Запас хода 520 км</li>
                    <li>Салон велюр</li>
                  </div>
                  <div className="rec-image">
                    <img
                      src="https://luxurylondon.co.uk/wp-content/uploads/2022/08/best-supercars-2021-03-2930x2198-c-center.jpg"
                      className="rec-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-icons">
              <div className="row-icons">
                <AiOutlineHeart style={{ fontSize: "32px" }} />
                <BiShare style={{ fontSize: "32px" }} />
                <BsThreeDots style={{ fontSize: "32px" }} />
              </div>
            </div>

            <div className="forms-container">
              <div className="forms">
                <button className="forms-write">Написать</button>
                <button className="forms-ofform">Оформить</button>
              </div>
            </div>

            {/*  */}
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Detail;

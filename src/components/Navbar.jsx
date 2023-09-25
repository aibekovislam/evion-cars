import React, { useEffect } from "react";
import "../css/navbar.scss";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <>
        <div className="main-image">
          <div className="container-navbar">
            {/*  */}
            <div className="navbar-header">
              <a href="#">
                <img
                  src="https://static.tildacdn.com/tild3034-6337-4131-a562-623930633331/2.svg"
                  className="logo-image"
                />
              </a>
            </div>

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

            <div className="util">
              <div className="container-util">
                <TfiShoppingCart style={{ fontSize: "28px", color: "white" }} />
                <CiUser style={{ fontSize: "28px", color: "white" }} />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </>
    </>
  );
}

export default Navbar;

import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../css/images/2.svgevionlogo.png";
import "../css/navbar.scss";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
function Navbar() {
  const navRef = useRef();
  const [activeImage, setActiveImage] = useState(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div
      className={`main-image ${activeImage === "car1" ? "car1-active" : ""} ${
        activeImage === "car2" ? "car2-active" : ""
      } ${activeImage === "car3" ? "car3-active" : ""}`}
    >
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

        <img src={logo} className="logo-image" />

        <div className="util">
          <div className="container-util">
            <TfiShoppingCart style={{ fontSize: "28px", color: "white" }} />
            <CiUser style={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Navbar;

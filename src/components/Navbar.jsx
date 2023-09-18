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
            <div className="navbar-header">
              <a href="#">
                <img
                  src="https://static.tildacdn.com/tild3034-6337-4131-a562-623930633331/2.svg"
                  className="logo-image"
                />
              </a>
            </div>

            <div>
              <ul className="navbar-nav">
                <li>
                  <a className="nav-item" href="#">
                    Для кого
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#">
                    Продукты
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
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#">
                    Ресурсы
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#">
                    Мы
                  </a>
                </li>
              </ul>
            </div>

            <div className="util">
              <div className="container-util">
                <button className="contacts-button">Контакты</button>
                <TfiShoppingCart style={{ fontSize: "28px", color: "white" }} />
                <CiUser style={{ fontSize: "28px", color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Navbar;

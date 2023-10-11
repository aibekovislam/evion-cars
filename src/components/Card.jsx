import React from "react";
import "../css/card.scss";
import car1 from "../css/images/car1.png";
import car2 from "../css/images/car2.png";
import car3 from "../css/images/car3.png";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-longCard">
        <div className="islam">
          <div className="longCard">
            {/*  */}

            <div className="images-three">
              <img onClick={() => navigate(`/details`)} src={car1} />
              <img onClick={() => navigate(`/details`)} src={car2} />
              <img onClick={() => navigate(`/details`)} src={car3} />
            </div>

            <div className="big-image">
              <img
                src="https://www.kbb.com/wp-content/uploads/2023/04/2023-lucid-air-sapphire-front-side-dark-wheels.jpg"
                onClick={() => navigate(`/details`)}
              />
            </div>

            <div className="titles-longCard">
              <div className="nav-title">
                <div className="tesla-model">Tesla Model Y</div>
                <div className="year">2019</div>
                <div className="dollar">35 000$</div>
                <AiOutlineHeart style={{ fontSize: "18px" }} />
              </div>

              <div className="extra-info">
                <div className="extra-info-item">от 204 до 450 л. с.</div>
                <div className="extra-info-item">217км/ч</div>
                <div className="extra-info-item">
                  Полный (4WD), Задний (RR).
                </div>
                <div className="extra-info-item">полноразмерный</div>
              </div>

              <div className="type">
                <div className="new">новый</div>
              </div>

              <div className="button-more">
                <button>Подробнее</button>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

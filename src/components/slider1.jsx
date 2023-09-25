import React, { useEffect, useState } from "react";
import "../css/slider.scss";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function slider1() {
  return (
    <div className="container-card">
      <div className="card-container">
        <div className="card-cars">
          <img
            className="slider-image"
            src="https://i.pinimg.com/564x/7e/57/80/7e57803807900646dbd8d0341bee0283.jpg"
          />

          <div className="container-card-title">
            <div className="wrapper-card">
              <div className="card-left">
                <h2>Neta U Pro</h2>
                <div>150 kWh Premium Auto</div>
              </div>
              <div className="card-right">
                <AiOutlineHeart style={{ fontSize: "28px" }} />
              </div>
            </div>

            <div className="card-titles">
              <div className="characteristics">2023 год</div>
              <div className="card-price">$18 000</div>
              <button className="more-card">Подробнее</button>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default slider1;

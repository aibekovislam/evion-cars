import React, { useEffect, useState } from "react";
import "../css/home.scss";
import Navbar from "../components/Navbar";
import Categories from "../css/images/Frame 2084.png";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, selectCars } from "../store/slices/carsSlice";
import { getImage } from "../functions/getImage";
import { useNavigate } from "react-router-dom";
import { Ring } from "@uiball/loaders";
import "../css/car.css";

import electroTitle from "../css/images/ЭЛЕКТРОМОБИЛИ.png";

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
import zapas from "../css/images/zapas.png";

import { getImages, selectImages } from "../store/slices/imagesSlice";
import Slider1 from "../components/slider1";

function HomePage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [carImages, setCarImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const carImagesB = useSelector(selectImages);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    const fetchCarImages = async () => {
      const imageUrls = {};
      for (const car of cars) {
        const imageUrl = await getImage(car.id);
        await dispatch(getImages(car.id));
        imageUrls[car.id] = imageUrl;
      }
      setCarImages(imageUrls);
      setIsLoading(false);
    };

    if (cars.length > 0) {
      fetchCarImages();
    }
  }, [cars, dispatch]);

  // useEffect(() => {
  //   if (carImagesB) {
  //     console.log(carImagesB);
  //   }
  // }, [carImagesB]);
  // console.log(carImagesB);

  return (
    <>
      <div className="main-image">
        <Navbar />
        <div className="title-order">
          <img src={electroTitle} />
          <h3>в наличии и на заказ</h3>
        </div>

        <div className="first-component">
          <div></div>
          <div className="info_car">
            <div className="info_car_item">
              <div className="big-number">550</div>
              <div className="small-number">ЗАПАС ХОДА</div>
            </div>
            <div className="info_car_item">
              <div className="big-number-special">330</div>
              <div className="small-number">МАКСИМАЛЬНАЯ СКОРОСТЬ</div>
            </div>
            <div className="info_car_item">
              <div className="big-number">350</div>
              <div className="small-number">ЛОШАДИННЫХ СИЛ</div>
            </div>
          </div>

          <div className="images_first">
            <img src={car1} />
            <img src={car2} />
            <img src={car3} />
          </div>

          {/*  */}
        </div>
      </div>

      <div className="container-main-content">
        <div className="container_card">
          <div className="container-filter">
            <div className="filter-box-container">
              <div className="filter-box">
                <h2>Фильтры</h2>
                <input
                  className="input-filter"
                  placeholder="Марка"
                  type="text"
                />
                <input
                  className="input-filter"
                  placeholder="Модель"
                  type="text"
                />
                <input
                  className="input-filter"
                  placeholder="Поколение"
                  type="text"
                />
                <input
                  className="special-input-filter"
                  placeholder="Цена от, $"
                  type="text"
                />
                <input
                  className="special-input-filter"
                  placeholder="до, $"
                  type="text"
                />
                <input
                  className="special-input-filter"
                  placeholder="Год от"
                  type="text"
                />
                <input
                  className="special-input-filter"
                  placeholder="до"
                  type="text"
                />
                <input
                  className="input-filter"
                  placeholder="Привод"
                  type="text"
                />
                <input
                  className="input-filter"
                  placeholder="Кузов"
                  type="text"
                />
                <button className="show">Показать</button>
              </div>
            </div>
          </div>

          <Slider1 />
        </div>
      </div>

      <div className="title-ia">
        <h2>Информации</h2>
      </div>

      <div className="container-info">
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
      </div>

      <div className="map-container">
        <h2>Карты зарядок</h2>
        <Map />
      </div>

      <div className="container-absolute">
        <div className="title-absolute">
          <h2>Нужна консультация?</h2>
          <button>Связаться</button>
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

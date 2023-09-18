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

// import CarsList from "../components/CarsList";

function HomePage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [carImages, setCarImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCars());
  }, []);

  useEffect(() => {
    const fetchCarImages = async () => {
      const imageUrls = {};
      for (const car of cars) {
        const imageUrl = await getImage(car.id);
        imageUrls[car.id] = imageUrl;
      }
      setCarImages(imageUrls);
      setIsLoading(false);
    };

    if (cars.length > 0) {
      fetchCarImages();
    }
  }, [cars]);

  console.log(cars);
  return (
    <>
      <div className="main-image">
        <Navbar />
        <div className="big-title">
          <div>Электромобили в наличии и на заказ</div>
          <button>
            <a href="https://forms.amocrm.ru/rvldddc">Отправить заявку</a>
          </button>
        </div>
      </div>

      <div className="categories-image">
        <img src={Categories} alt="" />
      </div>

      <div className="container-filter">
        <h2>Фильтры</h2>
        <div className="box">
          <select className="filter-car">
            <option value="">awd</option>
          </select>
          <select className="filter-car">
            <option value="">awd</option>
          </select>
          <select className="filter-car">
            <option value="">awd</option>
          </select>
          <select className="filter-car-special">
            <option value="">awd</option>
          </select>
          <select className="filter-car-special">
            <option value="">awd</option>
          </select>
          <select className="filter-car-special">
            <option value="">wad</option>
          </select>
          <select className="filter-car-special">
            <option value="">awd</option>
          </select>
          <select className="filter-car">
            <option value="">awd</option>
          </select>
          <select className="filter-car">
            <option value="">awd</option>
          </select>
          <button className="show">Показать</button>
        </div>
      </div>

      <div className="cars-container">
        <h2>Электромобилив в продаже</h2>

        <div className="cards">
          <div className="cards">
            {cars?.map((item) => (
              <div key={item.id} className="card">
                {isLoading ? (
                  <Ring size={40} lineWeight={5} speed={2} color="black" />
                ) : (
                  <img
                    onClick={() => navigate(`/details/${item.id}`)}
                    className="photo-car"
                    src={carImages[item.id]}
                    alt=""
                  />
                )}
                <div className="name">{item.name}</div>
                <div className="price">{item.buyPrice.value} $</div>
              </div>
            ))}
          </div>
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
        <div className="header-top">
          <img
            src="https://thumb.tildacdn.com/tild6563-3639-4562-a330-363130346263/-/resize/500x/-/format/webp/pri.png"
            alt=""
          />
          <h2>На одной волне и в прямом контакте с:</h2>
        </div>
        <div className="collab">
          <div className="collab-container">
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3934-6138-4631-b234-303133343161/Group_387468.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6136-6535-4537-b666-333832303066/Group_388.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3031-6165-4632-b938-326538623332/Group_389.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6239-3938-4534-a566-393036653662/Group_390.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6263-6163-4364-b033-636262353633/Group_383.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6535-6565-4439-a438-356635636331/Group_384.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6131-3333-4464-b838-316566323638/Group_386.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3264-3332-4662-b037-386333336131/Group_385.svg"
                alt=""
              />
            </div>
            <div className="thanks">
              <img
                src="https://thumb.tildacdn.com/tild6130-3131-4665-a363-376639393836/-/resize/434x/-/format/webp/Vector_2.png"
                alt=""
              />
              <p>
                Выражаем искреннюю благодарность Главе Торгово-промышленной
                палаты
                <br />
                Кыргызской Республики, Темиру Аргенбаевичу Сариеву, за его
                авктивную
                <br />
                роль в продвижении интересов кыргызскихпредпринимателей на
                <br />
                международной арене. <br /> <br /> Его усилия существенно
                способствуют развитию отношений между кыргызскими
                <br /> и заребуженими компаниями, созданию благоприяттного
                инвестиционного
                <br /> климата и расширению экспотных возможностей для бизнеса
                <br /> Кыргызской Республики
              </p>
            </div>
            <div className="title-h2">
              <h2>Партнеры по развитии зеленой экономики и принципам ESG</h2>
            </div>
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3461-3064-4632-b362-313937373137/Group_376.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3263-6130-4063-b632-636638356166/Group_375.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3762-3534-4565-a431-656432663330/Group_374.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3136-3565-4661-b232-633863306438/Group_373.svg"
                alt=""
              />
            </div>
            <div className="title-h2">
              <h2>Партнеры по финансовым вопросам</h2>
            </div>
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3564-3466-4936-b139-633936366334/Group_371_1.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6638-3963-4836-a337-336264356634/Group_370.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3838-3532-4463-b266-656136356464/Group_369.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6531-6436-4564-a335-343139316432/Group_368.svg"
                alt=""
              />
            </div>
            <div className="title-h2">
              <h2>Поставщики ЭЗС</h2>
            </div>
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3937-6463-4762-b965-393730383537/Group_366.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3136-3733-4261-b736-323439333333/Group_365.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6266-3364-4863-b732-383865613834/Group_364.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3862-3434-4731-a366-623462316232/Group_363.svg"
                alt=""
              />
            </div>
            <div className="title-h2">
              <h2>Поставщики электроэнергии</h2>
            </div>
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3363-6434-4331-a135-333463303539/Group_408.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6161-3036-4164-b665-366464306530/Group_407.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6465-3963-4565-b364-393562383963/Group_406.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3835-3935-4434-b133-323632353032/Group_405.svg"
                alt=""
              />
            </div>
            <div className="title-h2">
              <h2>Партнеры по линии автоматизации и ПО</h2>
            </div>
            <div className="company-special">
              <img
                src="https://static.tildacdn.com/tild3131-3934-4233-a337-666662306436/Group_340.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6164-3833-4864-a665-393836323263/Group_339.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3536-3334-4831-a364-356435343461/Group_338.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3932-3164-4137-b231-663162383931/Group_337.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3636-3165-4331-b663-326266373535/Group_333.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3232-3663-4633-a131-323239373035/Group_334.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6365-6461-4564-b533-386435363635/Group_335.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3234-3061-4766-b736-313532343730/Group_336.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6431-3731-4634-b530-653166396431/Atis.svg"
                alt=""
                className="special-image-collab"
              />
              <img
                src="https://static.tildacdn.com/tild6233-3938-4232-a661-616539313635/Group_331.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6338-6237-4538-b030-646439376365/Group_330.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild3664-6663-4133-b737-343162626266/Group_329.svg"
                alt=""
              />
            </div>
            <div className="title-h2">
              <h2>Корпоративные клиенты</h2>
            </div>
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3334-3364-4566-b832-323564316531/Group_326.svg"
                alt=""
              />
              <img
                src="https://static.tildacdn.com/tild6563-6265-4531-b439-633436376339/Group_327.svg"
                alt=""
              />
            </div>
            <div className="title-h2">
              <h2>Партнеры по коммуникациям и интернета</h2>
            </div>
            <div className="company">
              <img
                src="https://static.tildacdn.com/tild3365-3339-4834-b835-643164666465/Group_322.svg"
                alt=""
              />
              <img
                src="https://thumb.tildacdn.com/tild3832-3632-4564-a438-616430306235/-/resize/434x/-/format/webp/Group_475.png"
                alt=""
                className="special-image-collab"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="china">
        <div className="china-container">
          <img src="https://static.tildacdn.com/tild6233-3035-4739-b638-616565363738/_2395947323392.svg" />
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

import "../css/slider.scss";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../css/slider.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchCars, selectCars } from "../store/slices/carsSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages, selectImages } from "../store/slices/imagesSlice";
import { getImage } from "../functions/getImage";
import { Ring } from "@uiball/loaders";

function Slider1() {
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

  useEffect(() => {
    if (carImagesB) {
      // console.log(carImagesB);
    }
  }, [carImagesB]);
  // console.log(carImagesB);

  // console.log(cars);

  return (
    <div className="container-card">
      <div className="card-container">
        {cars?.map((item) => (
          <>
            <div className="card-cars">
              {isLoading ? (
                <Ring size={40} lineWeight={5} speed={2} color="black" />
              ) : (
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img src={carImages[item.id]} className="slider-image" />
                  </SwiperSlide>
                </Swiper>
              )}

              <div className="container-card-title">
                <div className="wrapper-card">
                  <div className="card-left">
                    <h2>{item.name}</h2>
                    <div>{item.description}</div>
                  </div>
                  <div className="card-right">
                    <AiOutlineHeart style={{ fontSize: "28px" }} />
                  </div>
                </div>

                <div className="card-titles">
                  <div className="characteristics">2023 год</div>
                  <div className="card-price">${item.buyPrice.value}</div>
                  <button className="more-card">Подробнее</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Slider1;

import React from "react";
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

function MyCarousel() {
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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cars?.map((item) => (
        <SwiperSlide>
          <img className="checkk" src={carImages[item.id]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MyCarousel;

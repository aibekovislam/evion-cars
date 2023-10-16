import "../css/slider.scss";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import "../css/slider.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchCars, selectCars } from "../store/slices/carsSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImages, selectImages } from "../store/slices/imagesSlice";
import { getImage } from "../functions/getImage";
import { Ring } from "@uiball/loaders";
import { notify } from "./Toastify";

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
  // {isLoading ? (
  //   <Ring size={40} lineWeight={5} speed={2} color="black" />
  // ) : (
  //   )}

  return (
    <div className="container-card">
      <div className="card-container">
        <div className="card-cars">
          <img
            onClick={() => navigate(`/detail`)}
            src="https://wealthynotes.com/wp-content/uploads/2019/03/mashina-bentley-1-1170x781.jpg"
            className="slider-image"
          />

          <div className="container-card-title">
            <div className="wrapper-card">
              <div className="card-left">
                <h2>Car model S</h2>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  tempore consequuntur natus ipsum molestias ullam. Id excepturi
                  aperiam facilis ipsam?
                </div>
              </div>
              <div className="card-right">
                <AiOutlineHeart style={{ fontSize: "28px" }} />
              </div>
            </div>

            <div className="card-titles">
              <div className="characteristics">2023 год</div>
              <div className="card-price">$ 12000</div>
              <div className="more-card-container">
                <button
                  className="more-card"
                  onClick={() => navigate(`/detail`)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-cars">
          <img
            onClick={() => navigate(`/details`)}
            src="https://www.ixbt.com/img/n1/news/2021/8/1/4lc300_large.jpg"
            className="slider-image"
          />

          <div className="container-card-title">
            <div className="wrapper-card">
              <div className="card-left">
                <h2>Car model S</h2>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                  tempore consequuntur natus ipsum molestias ullam. Id excepturi
                  aperiam facilis ipsam?
                </div>
              </div>
              <div className="card-right">
                <AiOutlineHeart style={{ fontSize: "28px" }} />
              </div>
            </div>

            <div className="card-titles">
              <div className="characteristics">2023 год</div>
              <div className="card-price">$ 12000</div>
              <div className="more-card-container">
                <button
                  className="more-card"
                  onClick={() => navigate(`/detail`)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider1;

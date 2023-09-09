import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCars } from '../store/slices/carsSlice';
import { getImage } from '../functions/getImage';
import { useNavigate } from 'react-router-dom';
import Detail from '../pages/Detail';

function CarsList() {
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
    
        
    return (
        <div >
            <h1>Список электромашин:</h1>
            {cars?.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.pathName}</h3>
                    <div>{item.buyPrice.value} сом</div>
                    { carImages ? (
                        <img onClick={() => navigate(`/details/${item.id}`)} src={carImages[item.id]}/>
                    ) : (
                      <div>Нету фотографии</div>
                    ) }
                    <hr></hr>
                </div>
            ))}
        </div>
    );
}

export default CarsList;


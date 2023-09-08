import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, selectCars } from '../store/slices/carsSlice';
import { getImage } from '../functions/getImage';

function CarsList() {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const [carImages, setCarImages] = useState({});

    useEffect(() => {
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
        };

        if (cars.length > 0) {
            fetchCarImages();
        }
    }, [cars]); // Run this effect whenever cars change

    if (cars.status === 'loading') {
        return <div>...Loading</div>;
    }

    if (cars.status === 'error') {
        return <div>Error {cars.error}</div>;
    }

    return (
        <div>
            <h1>Список электромашин:</h1>
            {cars?.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.pathName}</h3>
                    <div>{item.buyPrice.value} сом</div>
                    { carImages ? (
                      <img src={carImages[item.id]}/>
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

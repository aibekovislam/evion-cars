import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars, selectCars } from '../store/slices/carsSlice'
import { fetchOneImage } from '../store/slices/carsImageSlice'

function CarsList() {
    const dispatch = useDispatch()
    const cars = useSelector(selectCars);

    useEffect(() => {
        dispatch(fetchCars())
    }, [])

    if(cars.status === 'loading') {
        return <div>...Loading</div>
    }

    if(cars.status === 'error') {
        return <div>Error {cars.error}</div>
    }

      return (
        <div>
          <h1>Список электромашин:</h1>
          {cars?.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.pathName}</h3>
              <div>{item.buyPrice.value} сом</div>
              <img src={''} />
              <hr></hr>
            </div>
          ))}
        </div>
      );    
}

export default CarsList
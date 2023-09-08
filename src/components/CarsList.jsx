import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars, selectCars } from '../store/slices/carsSlice'

function CarsList() {
    const dispatch = useDispatch()
    const cars = useSelector(selectCars)

    useEffect(() => {
        dispatch(fetchCars())
    }, [])

    if(cars.status === 'loading') {
        <div>...Loading</div>
    } else if (cars.status === 'error') {
        <div>Error: {cars.error}</div>
    }
    
    console.log(cars)

  return (
    <div>
        <h1>Список электромашин:</h1>
    </div>
  )
}

export default CarsList
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

function BuyElectroCar() {
    const { id } = useParams();
    // function order() {
    //     axios.post('https://evion.amocrm.ru/api/v4/leads', {
    //     data: [
    //         {
    //         name: "Сделка для примера 1",
    //         created_by: 0,
    //         price: 20000,
    //         custom_fields_values: [
    //             {
    //             field_id: 294471,
    //             values: [
    //                 {
    //                 value: "Наш первый клиент"
    //                 }
    //             ]
    //             }
    //         ]
    //         },
    //         {
    //         name: "Сделка для примера 2",
    //         price: 10000,
    //         _embedded: {
    //             tags: [
    //             {
    //                 id: 2719
    //             }
    //             ]
    //         }
    //         }
    //     ]
    //     }, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1Y2UyNzZiYTUzZDVhZDQ3NDgxMDJiMzY1OWMzMmZiNTJmYTNhN2ViMTk2Mjk5ODZjMTRhYzk5NTdjNjM0YjIyMThmZGJiYzkzNzU1MmE4In0.eyJhdWQiOiI3YjQ5MGYxOC0yYmU1LTRhNTUtYTc0ZS0xOTYzYzk2NDFiOTgiLCJqdGkiOiI2NWNlMjc2YmE1M2Q1YWQ0NzQ4MTAyYjM2NTljMzJmYjUyZmEzYTdlYjE5NjI5OTg2YzE0YWM5OTU3YzYzNGIyMjE4ZmRiYmM5Mzc1NTJhOCIsImlhdCI6MTY5NDIzNTc3OCwibmJmIjoxNjk0MjM1Nzc4LCJleHAiOjE2OTQyMzgxNzgsInN1YiI6Ijk4OTM5NzQiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MCwiYmFzZV9kb21haW4iOm51bGwsInZlcnNpb24iOiJ2MSIsInNjb3BlcyI6WyJjaGF0cyIsImNybSIsIm1haWwiLCJub3RpZmljYXRpb25zIiwidW5zb3J0ZWQiXX0.RS8ptXUF8bavK5R2yITekxu-pwGyC7UNCotVvQ06gJwD0DhKSi3PeA4tSr84ZFSLEbw_eqVegSX3A7PNBRhbfVQiALskgy3ln5uxPFy1-cwrtmrieIOTBbiwXksG1Jn1J4PcjdMs7A1Lh9nHT0mBlaMCuL8Q6hgAYhUPc3_C0yFSF6wrMtUSdI7FAdIbv57hNpMGGdJphpEty-mn908qR0zuIrTcRweA7YNElCffYmH_DYlWztPbUAT775GgAGzWoIZGUwbOhF9hlUleFt1-AgWgFh1swvovOcxoo3Z0KCghcstlT9PeEh46Ng4U6JKSDSOsowMhrUNY5KxfTgE35w`
    //     }
    //     })
    //     .then((response) => {
    //     console.log('Сделки успешно созданы:', response.data);
    //     })
    //     .catch((error) => {
    //     console.error('Ошибка при создании сделок:', error);
    //     });
    // }
  return (
    <button>Отправить</button>
  )
}

export default BuyElectroCar
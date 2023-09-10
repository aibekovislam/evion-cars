import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BuyElectroCar() {
  const { id } = useParams();
  const [leadName, setLeadName] = useState('');

  async function getTokenFromServer() {
    try {
      const response = await axios.post('https://evion-cars-api-a533851fe462.herokuapp.com/get-access-token');
      console.log('Ответ от сервера:', response.data);
      localStorage.setItem("token", JSON.stringify(response.data))
    } catch (error) {
      console.error('Ошибка при получении токена:', error);
    }
  }  

  useEffect(() => {
    getTokenFromServer();
  }, [])

  const token = localStorage.getItem("token");
  console.log(token)

  const config = {
    headers: {
      'Authorization': `Bearer ${token.access_token}`,
      'Content-Type': 'application/json',
    },
  };

  function order() {
    const leadData = {
      name: leadName,
      pipeline_id: 7218598
    };

    axios.post('https://evion-cars-api-a533851fe462.herokuapp.com/create-leads', leadData, config)
    .then((response) => {
      if (response.status === 200) {
        console.log('Сделка успешно добавлена:', response.data);
      } else {
        console.error('Ошибка при добавлении сделки:', response.status, response.data);
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Имя сделки"
        value={leadName}
        onChange={(e) => setLeadName(e.target.value)}
      />
      <button onClick={order}>Добавить сделку в AmoCRM</button>
    </div>
  );
}

export default BuyElectroCar;

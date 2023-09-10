import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

function BuyElectroCar() {
  const { id } = useParams();
  const [leadName, setLeadName] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Добавляем состояние для отслеживания отправки формы

  const validationSchema = Yup.object().shape({
    leadName: Yup.string()
      .required('Имя сделки обязательно для заполнения')
      .min(3, 'Имя сделки должно содержать минимум 3 символа'),
  });  

  const handleLeadNameChange = (e) => {
    const { name, value } = e.target;
    setLeadName(value);
    
    // Выполняем валидацию
    Yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setValidationErrors({ ...validationErrors, [name]: '' });
      })
      .catch((error) => {
        setValidationErrors({ ...validationErrors, [name]: error.message });
      });
  };  

  async function getTokenFromServer() {
    try {
      const response = await axios.post('http://localhost:3000/get-access-token');
      console.log('Ответ от сервера:', response.data);
      localStorage.setItem("token", JSON.stringify(response.data))
    } catch (error) {
      console.error('Ошибка при получении токена:', error);
    }
  }  

  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      'Authorization': `Bearer ${token?.access_token}`,
      'Content-Type': 'application/json',
    },
  };

  function order() {
    setIsSubmitting(true); // Устанавливаем состояние отправки формы
  
    validationSchema
      .validate({ leadName }) // Проводим валидацию
      .then(() => {
        const leadData = [
          {
            name: leadName,
            price: 200,
            pipeline_id: 7218598,
            custom_fields_values: [
              {
                  field_id: 2161621,
                  values: [
                      {
                          value: "BYD (Build Your Dreams)"
                      }
                  ]
              }
          ]
          }
        ]
  
        axios
          .post('https://evion-cars-api-a533851fe462.herokuapp.com/create-leads', leadData, config)
          .then((response) => {
            if (response.status === 200) {
              console.log('Сделка успешно добавлена:', response.data);
              // Выполните необходимые действия после успешной отправки
            } else {
              console.error('Ошибка при добавлении сделки:', response.status, response.data);
              // Обработка ошибки, если запрос не удался
            }
          })
          .catch((error) => {
            console.error('Ошибка при отправке запроса:', error);
            // Обработка ошибки, если запрос не удался
          })
          .finally(() => {
            setIsSubmitting(false); // Сбрасываем состояние отправки формы
          });
      })
      .catch((error) => {
        // Ошибка валидации
        setValidationErrors({ ...validationErrors, leadName: error.message });
        setIsSubmitting(false); // Сбрасываем состояние отправки формы
      });
  }  

  return (
    <div>
      <input
        type="text"
        placeholder="Имя сделки"
        name="leadName"
        value={leadName}
        onChange={handleLeadNameChange}
        disabled={isSubmitting} // Заблокировать поле ввода во время отправки формы
      />
      {validationErrors.leadName && (
        <div className="error-message">{validationErrors.leadName}</div>
      )}
      <button onClick={order} disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Добавить сделку в AmoCRM'}
      </button>
    </div>
  );
}

export default BuyElectroCar;

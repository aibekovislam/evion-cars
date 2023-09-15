import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

function BuyElectroCar() {
  const [leadName, setLeadName] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const validationSchema = Yup.object().shape({
    leadName: Yup.string()
      .required('Имя сделки обязательно для заполнения')
      .min(3, 'Имя сделки должно содержать минимум 3 символа'),
  });  

  const handleLeadNameChange = (e) => {
    const { name, value } = e.target;
    setLeadName(value);
    
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
      const response = await axios.post('https://evion-cars-api-a533851fe462.herokuapp.com/get-access-token');
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

  // useEffect(() => {
  //   getTokenFromServer()
  // }, [])

  function order() {
    setIsSubmitting(true); 
  
    validationSchema
      .validate({ leadName })
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
            } else {
              console.error('Ошибка при добавлении сделки:', response.status, response.data);
            }
          })
          .catch((error) => {
            console.error('Ошибка при отправке запроса:', error);
          })
          .finally(() => {
            setIsSubmitting(false); 
          });
      })
      .catch((error) => {
        setValidationErrors({ ...validationErrors, leadName: error.message });
        setIsSubmitting(false);
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

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useVisitorUid } from '../contexts/VisitorContext';
import axios from 'axios';

function DetailForm() {
  const { visitorUid } = useVisitorUid();

  const handleAuthorizeClick = () => {
    const authorizationUrl =
      'https://www.amocrm.ru/oauth?client_id=e427c3a4-e7b1-41f2-9e36-216b7aedb018&mode=popup';

    const popup = window.open(
      authorizationUrl,
      'AmoCRM Авторизация',
      'scrollbars,status,resizable,width=750,height=580'
    );

    window.addEventListener('message', (event) => {
      if (event.source === popup) {
        popup.close();
        if (event.data.error) {
          console.error('Ошибка авторизации:', event.data.error);
        } else if (event.data.code) {
          console.log('Authorization code:', event.data.code);
          localStorage.setItem('authorizationCode', event.data.code);
        }
      }
    });
  };

  return (
    <button onClick={handleAuthorizeClick}>Авторизоваться в AmoCRM</button>
  );
}

export default DetailForm;

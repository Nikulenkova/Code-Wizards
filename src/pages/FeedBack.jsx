import React, { useState } from "react";
 import css from '../styles/FeedBack.css'
 import phone from '../images/phone.png'
 import Popup from 'reactjs-popup';
 import Head2 from '../views/global/global/Head2'

 function Phone()
 {
   return <img className= 'phone' src={phone}></img>
 }

 const Check_answer = () => {
     const feedback = {
         status: "Рассмотрено",
         date: "2024-05-01",
         message: "Здесь будет обращение...",
         photo: "url"
     };

     let statusColor;
     switch (feedback.status) {
         case "Рассмотрено":
             statusColor = "green";
             break;
         case "Отклонено":
             statusColor = "red";
             break;
         case "В работе":
             statusColor = "yellow";
             break;
         default:
             statusColor = "black"; 
     }

     const statusStyle = {
         backgroundColor: statusColor
     };

     return (
        <div className="conteiner-feedback">
        <Head2/>
        <h1 className="feedback-title">Обратная связь</h1>
        <div className="left-feedback">
        <div className="delails-appeal">
        <div className="title-left-column">Детали обращения</div>
        <div className="form-feedback">
        <h3>Текущий статус</h3>
        <p id="black-text">  {feedback.status}
        <span className={`status ${statusColor}`}></span>
        </p>
        <h3>Дата регистрации</h3>
        <p>{feedback.date}</p>
        <h3 htmlFor="userMessage">Обращение</h3>
        <p><textarea id="userMessage" className="input-feedback-appeal" type="text" readOnly value={feedback.message}/></p>
        <h3><img src={feedback.photo} alt="фото 1" /> </h3>
        </div>
        </div>
        </div>
        <div className="right-feedback">
        <div className="decision-appeal">
        <div className="title-right-column">Решение по обращению</div>
        <div className="form-decision">
        <h3>Дата решения</h3>
        <p>{feedback.date}</p>
        <h3 htmlFor="userMessage">Решение</h3>
        <p><textarea id="userMessage" className="input-feedback-appeal" type="text" readOnly value={feedback.message} /> </p>
        <div className="manager-info">
        <h3>Контактные данные менеджера</h3>
        <p>Имя фамилия</p>
        <p>+7 995 ******</p>
        <p>example@gmail.com</p>
        <Phone/>
        </div>
        </div>
        </div>  
        </div>
         </div>
     );
 };
 export default Check_answer;

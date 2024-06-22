import React, { useState } from "react";
import '../styles/Check_completed_request.css'
import Menu from "../comps/Menu";
import Arrow from '/Users/nikul/ReactProject/first-project/src/images/Стрелка_назад.png' //Путь измени

const Check_completed_request = () => {
    const feedback = {
        name: "Алексей",
        date: "2024-05-01",
        message: "Здесь будет обращение...",
        photo: "url",
        topic: "Сломан принтер"
    };

    const Back_Arrow = () => {
        const onClick = () => {
            window.location.assign('/completed_requests');
        };
    
        return (
            <button className="back-arrow" onClick={onClick}><img src={Arrow}></img></button>
        );
    };
    return (
        <div>
            <Menu/>
            <Back_Arrow/>
            <div className="main-container-check-request">
            <h1 className="topic-title-request">{feedback.topic}</h1>
            <div className="left-check-request">
            <div className="title-left-column">Детали обращения</div>
            <div className="body-left">
            <h3>Пользователь</h3>
            <p>{feedback.name}</p>
            <h3>Дата регистрации</h3>
            <p>{feedback.date}</p>
            <h3 htmlFor="userMessage">Обращение</h3>
            <p><textarea id="userMessage" className="text-appeal-request" type="text" readOnly value={feedback.message}/></p>
            <h3><img src={feedback.photo} alt="фото 1" /> </h3>
            </div>
            </div>
            <div className="right-check-request">
            <div className="title-right-column">Решение по обращению</div>
            <div className="body-left">
            <h3>Дата решения</h3>
            <p>{feedback.date}</p>
            <h3 htmlFor="userMessage">Решение</h3>
            <p><textarea id="userMessage" className="text-appeal-request" type="text" readOnly value={feedback.message} /> </p>
            </div>
            </div>
        </div>
        </div>
    );
};
export default Check_completed_request;

import React from "react";
import "../styles/Answer.css"
import { useState } from "react";
import Menu from '../comps/Menu'
import Arrow from '../images/Стрелка_назад.png'


//Путь будет меняться???
const BackButton = () => {
    const onClick = () => {
        window.location.assign('/read_appeal');
    };

    return (
        <button className="back-arrow" onClick={onClick}><img src={Arrow}></img></button>
    );
};


const Reject_request = () => {
    return (
        <React.Fragment>
            <Menu/>
            <BackButton/>
            <div className="conteiner-answer">
                <div className="left-answer">
                <span className="important-text">Важно:</span><br></br>
                <label className="text-info">При нажатии на стрелочку<br></br>в левом верхнем углу черновик обращения<br></br>автоматически сохраняется в категории<br></br>“Обращения в работе”</label>
                </div>
                <div className="right-answer">
                <p className="text-topic">Для удобства определите тему обращения</p>
                <input className = "input-topic" type="text" name="name" placeholder="Введите название темы..."/>
        <p className="answer-appeal">Укажите причину отклонения</p>
        <textarea className = "input-answer" type="text" name="name" placeholder="Введите причину..."/>
        <button className="send-answer">Отправить</button>
        </div>
        </div>

        </React.Fragment>
        )
    }
    export default Reject_request

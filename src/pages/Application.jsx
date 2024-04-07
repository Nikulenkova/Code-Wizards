import React from "react";
import Head2 from "../views/global/global/Head2";
import css from "../styles/Application.css"
import { InputFile } from "../comps/InputFile";
import { useState } from "react";
import woman from '../images/woman(application).png'
import spot from '../images/Пятно(Application).png'
import copy from '../images/копирование.png'
import Popup from 'reactjs-popup';
import Main from './Main'

 function Woman() {
 return(
     <img className ="woman" src={woman}></img>
 )
 }

 function Spot() {
    return(
        <img className ="spot" src={spot}></img>
    )
    }

const Application = () => {
    const [photo, setPhoto] = useState(null);
    const [inputValue, setInputValue] = useState("");
    return (
        <React.Fragment>
            <Head2></Head2>
            <Woman/>
            <Spot/>
            <form className="form2">
                Введите ваше имя и фамилию по желанию<br/>
                    <input className = "input2" type="text" name="name"/>
                Оставьте жалобу или предложение<br/>
                    <textarea className = "input3" type="text" name="application"/>
                Загрузите фото<br/>
                <InputFile accept =".png,.jpg,.jpeg" multiple = {true} files={photo} setFiles={setPhoto}/>
                <Popup trigger=
                {<button type="button" className="send">Отправить заявку</button>}
                modal nested>
                    {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            Спасибо за заявку!<br/>
                            Ваш ключ для просмотра обратной связи!
                            <input id="textbox" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
                            <button onClick={() => {navigator.clipboard.writeText(inputValue)}}><img src={copy} width="20" height="20"></img></button>
                            <button className="main" onClick={() => Main}>Перейти на главную</button>
                            </div>
                        </div>
                    )
                }
                </Popup>
            </form>
        </React.Fragment>
        )
    }
    export default Application

import React from "react";
import Head2 from "../views/global/global/Head2";
import css from "../styles/Application.css"
import { InputFile } from "../comps/InputFile";
import { useState } from "react";
import woman from '../images/woman(application).png'
import spot from '../images/Пятно(Application).png'
import copy from '../images/копирование.png'
import Popup from 'reactjs-popup';

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

    class Main extends React.Component {
        onclick(){
      window.location.assign('/')
        }
        render() {
          return <button className="main" onClick={(e) => this.onclick(e)}>Перейти на главную</button>
        }
      }

const Application = () => {
    const [photo, setPhoto] = useState(null);
    const [inputValue, setInputValue] = useState("");
    return (
        <React.Fragment>
            <div className="container">
            <div className="data-section">
            <Head2></Head2>
            <div className="d2">
            <Woman/> 
            <Spot/>
            <form className="form2">
                Введите ваше имя и фамилию по желанию<br/>
                    <input className = "input2" type="text" name="name"/>
                Оставьте жалобу или предложение<br/>
                    <textarea className = "input3" type="text" name="application"/>
               Загрузите фото(максимум 3 фото)<br/>
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
                            <div className="d1">
                            <div id="textbox" value={inputValue} onChange={e => setInputValue(e.target.value)}></div>
                            <button className = "Copy" onClick={() => {navigator.clipboard.writeText(inputValue)}}><img src={copy} width="30" height="30"></img></button>
                            </div>
                            <Main/>
                            </div>
                        </div>
                    )
                }
                </Popup>
            </form>
            </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
    export default Application

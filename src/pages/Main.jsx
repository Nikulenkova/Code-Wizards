import React from "react";
import Head from '../views/global/global/Head';
import "../styles/index.css"
import Popup from 'reactjs-popup';
import lamp from '../images/Лампа.png'
import human_main from '../images/Human_main.png'
import line_main from '../images/Line_main1.png'


function Lamp()
{
  return <img className= 'lamp_png' src={lamp}></img>
}

function Human_main()
{
  return <img className= 'human_png' src={human_main}></img>
}

function Line_main()
{
  return <img className= 'line_png' src={line_main}></img>
}

function Feedback()
{
  return (
    <Popup trigger={<button className='feedback'>Посмотреть обратную связь</button>} modal nested>
      {close => (
        <div className='modalWindow'>
          <div className='text'>
            <Close />
            Если у вас уже есть ключ от обратной связи, <br />
            введите его ниже, чтобы проверить статус вашего обращения<br />
            <div className="d1">
              <input className="key" placeholder={"Ввести ключ..."} ></input>
              <button className="check">Проверить обратную связь</button>
            </div>
          </div>
        </div>
      )}
    </Popup>
    );
    }

class Close extends React.Component {
  onclick(){
window.location.assign('/')
  }
  render() {
    return <div className ='close' onClick={(e) => this.onclick(e)}></div>
  }
}

class Application extends React.Component {
  onclick(){
window.location.assign('/application')
  }
  render() {
    return <button className ='application' onClick={(e) => this.onclick(e)}>Зарегистрировать заявку</button>
  }
}

const Main = () => {
    return (
        <React.Fragment>
          <div className="conteiner">
            <Head/>
            <div className="conteiner-text-main">
            <p className="text_main">Говорите <span className="color">свободно,</span> <br></br>оставайтесь анонимными</p>
            <p className="text_main1">Оставьте свою заявку и получите обратную связь </p>
            </div>
            <Lamp/>
            <Human_main/>
            <Line_main/>
            <Application/>
            <Feedback/> 
            </div>
        </React.Fragment>
    )
}
export default Main

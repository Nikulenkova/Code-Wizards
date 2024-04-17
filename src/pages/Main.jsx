import React from "react";
import Head from '../views/global/global/Head';
import css from "../styles/index.css"
import line from '../images/Line1.png'
import Popup from 'reactjs-popup';
import main_woman from '../images/main_woman.png'
import line_2 from '../images/Line2.png'

function Main_woman()
{
  return <img className= 'png' src={main_woman}></img>
}
function Line1()
{
  return <img className= 'line1' src={line}></img>
}
function Line2()
{
  return <img className= 'line2' src={line_2}></img>
}
function Feedback()
{
  return <Popup trigger= {<button className='feedback'>Посмотреть обратную связь</button>}
  modal nested>
    {
close => ( 
  <div className='modalWindow'>
    <Close/>
    <div className='text'>
    Если у вас уже есть ключ от обратной связи, <br/>
    введите его ниже, чтобы проверить статус вашего обращения<br/>
    <input className="key" placeholder = {"Ввести ключ..."}></input>
    <button className="check">Проверить обратную связь</button>
    </div>
  </div>
)
    }
    </Popup>
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
    return <button className ='application' onClick={(e) => this.onclick(e)}>Оставить заявку</button>
  }
}

const Main = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <Main_woman></Main_woman>
            <Line1></Line1>
            <Line2></Line2>
            <Application></Application>
            <Feedback></Feedback> 
        </React.Fragment>
    )
}
export default Main

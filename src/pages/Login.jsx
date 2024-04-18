import React, { useState } from "react";
import Head2 from "../views/global/global/Head2";
import InputComponent from "../comps/Input";
import css from "../styles/Login.css"
import Table from '../Tablet.png'
import human from '../Human.png'
import rectangle from '../прямоугольник.png'
import circle from '../Круг.png'

function Tablet()
{
  return <img className= 'tablet' src={Table}></img>
}
function Human()
{
  return <img className= 'human' src={human}></img>
}
function Rectangle()
{
  return <img className= 'rectangle' src={rectangle}></img>
}
function Circle()
{
  return <img className= 'circle' src={circle}></img>
}

class Vxod extends React.Component {
  onclick(){
window.location.assign('/appeals')
  }
  render() {
    return <button className="Vxod" onClick={(e) => this.onclick(e)}>Войти</button>
  }
}

const Login = () => {

    return (
        <React.Fragment>
            <Head2></Head2>
            <Tablet/>
            <Human/>
            <h2 className="n">Добро пожаловать!</h2>
            <form className="form1">
            <InputComponent name = 'login' placeholder = {"Логин"}/>
            <InputComponent name = 'password' placeholder = {"Пароль"}/> 
            </form>
           <Vxod/> 
            <Rectangle/>
            <Circle/>
        </React.Fragment>
        )
    }

    export default Login

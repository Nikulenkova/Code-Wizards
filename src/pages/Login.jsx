import React, { useState } from "react";
import Head2 from "../views/global/global/Head2";
import InputComponent from "../comps/Input";
import "../styles/Login.css"
import Login_man from "../images/Login.png"

function Login_man_png() {
  return(
      <img className ="login_man" src={Login_man}></img>
  )
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
        <div className="container_fon">
            <Head2/>
            <div className="div-login">
            <div className="div_right-login">
            <div className="title-login">Добро пожаловать!</div>
            <form className="form1">
            <InputComponent name = 'login' placeholder = {"Логин"}/>
            <InputComponent name = 'password' placeholder = {"Пароль"}/> 
            <button type="submit" className="Vxod">Войти</button>
            </form> 
            </div>
            <div className="div_left-login">
              <Login_man_png/>
            </div>
            </div> 
            </div>
        </React.Fragment>
        )
    }

    export default Login

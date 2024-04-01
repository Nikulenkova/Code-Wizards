import React from "react";
import Head2 from "../views/global/global/Head2";
import InputComponent from "../comps/Input";

function Tablet()
{
  return <img className= 'tablet' src='/Tablet.png'></img>
}
function Human()
{
  return <img className= 'human' src='/Human.png'></img>
}
function Rectangle()
{
  return <img className= 'rectangle' src='/прямоугольник.png'></img>
}
function Circle()
{
  return <img className= 'circle' src='/круг.png'></img>
}
const Login = () => {
    return (
        <React.Fragment>
            <Head2></Head2>
            <Tablet/>
            <Human/>
            <h1 className="n">Добро пожаловать!</h1>
            <form>
            <InputComponent placeholder = {"Логин"}/>
            <InputComponent placeholder = {"Пароль"}/> 
            </form>
            <button className="Vxod">Войти</button>
            <Rectangle/>
            <Circle/>
        </React.Fragment>
        )
    }
    export default Login
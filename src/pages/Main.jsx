import React from "react";
import Head from '../views/global/global/Head';

function Png()
{
  return <img className= 'png' src='/ellipse 1.png'></img>
}
function Line1()
{
  return <img className= 'line1' src='/Линия 1.png'></img>
}
function Line2()
{
  return <img className= 'line2' src='/Vector 3.png'></img>
}
function Letter()
{
  return <img className= 'letter' src='/письмо_главное.png'></img>
}
function Feedback()
{
  return <button className='feedback'>Посмотреть обратную связь</button>
}
function Application()
{
  return <button className ='application'>Подать заявку</button>
}

const Main = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <Png></Png>
            <Line1></Line1>
            <Line2></Line2>
            <Application></Application>
            <Letter></Letter>
            <Feedback></Feedback>
            <h1>Развиваемся вместе: ваше мнение для нас важно!</h1>
        </React.Fragment>
    )
}
export default Main
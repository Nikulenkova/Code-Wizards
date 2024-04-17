import React from "react";
import Head2 from "../views/global/global/Head2";
import css from "../styles/Appeals.css"
import appeals1 from '../images/appeals1.png'
import appeals2 from '../images/appeals2.png'
import appeals3 from '../images/appeals3.png'

const Appeals = () => {
    return (
        <React.Fragment>
            <Head2></Head2>
            <button className="image-button1"><img src={appeals1}></img><br/>Новые обращения</button>
            <button className="image-button2"><img src={appeals2}></img><br/>Обращения в работе</button>
            <button className="image-button3"><img src={appeals3}></img><br/>Завершенные обращения</button>
        </React.Fragment>
        )
    }
    export default Appeals
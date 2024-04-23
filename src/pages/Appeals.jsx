import React from "react";
import Head2 from "../views/global/global/Head2";
import css from "../styles/Appeals.css"
import appeals1 from '../images/appeals1.png'
import appeals2 from '../images/appeals2.png'
import appeals3 from '../images/appeals3.png'

class Completed extends React.Component {
    onclick() {
       window.location.assign('/completed_requests');
    }
    render() {
        return (<button className="image-button3" onClick={(e) => this.onclick(e)}><img src={appeals3}></img><br/>Завершенные обращения</button>)
    }
 }
 class New extends React.Component {
    onclick() {
       window.location.assign('/new_requests');
    }
    render() {
        return (<button className="image-button1" onClick={(e) => this.onclick(e)}><img src={appeals1}></img><br/>Новые обращения</button>)
    }
 }

 class In_work extends React.Component {
    onclick() {
       window.location.assign('/requests_in_work');
    }
    render() {
        return (<button className="image-button2" onClick={(e) => this.onclick(e)}><img src={appeals2}></img><br/>Обращения в работе</button>)
    }
 }
const Appeals = () => {
    return (
        <React.Fragment>
            <div className="container">
            <div className="data-section">
            <Head2></Head2> 
            <New/>
            <In_work/>
            <Completed/>
            </div>
            </div>
        </React.Fragment>
        )
    }
    export default Appeals

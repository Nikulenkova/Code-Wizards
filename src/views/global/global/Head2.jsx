import React from "react";
import Main from "../../../pages/Main";

class Back_button extends React.Component {
    onclick() {
        window.location.assign('http://localhost:3000/Main.jsx');
    }
    render() {
        return (<button className='login' onClick={(e) => this.onclick(e)}>На главную</button>)
    }
}  

const Head2 = () => {
    return (
        <React.Fragment>
            <Back_button/>
        </React.Fragment>
    )
}
export default Head2
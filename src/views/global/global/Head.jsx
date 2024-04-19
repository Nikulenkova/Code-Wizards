import React from "react";

function Help()
{
  return <button className= 'help'>Помощь</button>
} 
class LogIn extends React.Component {
   onclick() {
      window.location.assign('/login');
   }
   render() {
       return (<button className='logIn' onClick={(e) => this.onclick(e)}>Вход</button>)
   }
}
const Head = () => {
    return (
        <React.Fragment>
            <Help/>
            <LogIn/>
        </React.Fragment>
    )
}
export default Head

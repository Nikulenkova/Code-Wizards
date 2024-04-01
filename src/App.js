import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import Main from './pages/Main';
import '../src/styles/Login.css'
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
  <React.Fragment>
     <Main/>
   </React.Fragment>
  )
 }
 export default App;
  //   (
  //    <BrowserRouter><Routes>
  //     <Route path='/' element = {<Main/>}>
  //       <Route path='one' element = {<Login/>}/>
  //     </Route>
  //    </Routes>
  //    </BrowserRouter>
  //  )

// function App() {
//       return(
//           <Router>
//               <div className='App'>
//                   <Route path ="/" exact component={Main}/>
//                  <Route path="/second" exact component={Login}/>
//              </div>
//          </Router>
//       )
//   }
//   export default App;

//  class App extends React.Component {
//    render() {
//      return (
//        <div className="App">
//          <h1>Hello, React!</h1>
//        </div>
//      )
//    }
//  }
// // ReactDOM.render(<App />, document.getElementById('root'))

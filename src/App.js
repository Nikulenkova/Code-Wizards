import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import Application from './pages/Application';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Appeals from './pages/Appeals'

function App() {
  <Main/>
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/application" element = {<Application/>}/>
          <Route path="/appeals" element = {<Appeals/>}/>
        </Routes>
      </div>
    </Router>
  )
 }
 export default App;

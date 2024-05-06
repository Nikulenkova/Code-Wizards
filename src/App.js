import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Application from './pages/Application';
import New_requests from './pages/New_requests';
import Requests_in_work from './pages/Requests_in_work';
import Completed_requests from './pages/Completed_requests';
import Appeals from './pages/Appeals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/application" element={<Application />} />
        <Route path="/appeals" element={<Appeals />} />
        <Route path="/new_requests" element={<New_requests />} /> 
        <Route path="/requests_in_work" element={<Requests_in_work />} />
        <Route path="/completed_requests" element={<Completed_requests />} />
        <Route path="/read_appeal" element={<Read_appeal />} />
      </Routes>
    </Router>
  );
}

export default App;

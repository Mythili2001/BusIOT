import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'  

import Navigation from './Components/Navigation';
import Home1 from './Pages/Home1.jsx'

import './App.css'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import BusNumber4 from './Pages/Buses/BusNumber4.jsx';
import BusNumber10 from './Pages/Buses/BusNumber10.jsx';


function App() {
  return (
    <Router>
    <Navigation/>
    <Routes>
      <Route exact path="/" element={<Home1 />}/>
      <Route  exact path="/BusNumber4" element={<BusNumber4 />} />   
      <Route  exact path="/BusNumber10" element={<BusNumber10 />} />   

    </Routes>
  </Router>
  
  );
}

export default App;

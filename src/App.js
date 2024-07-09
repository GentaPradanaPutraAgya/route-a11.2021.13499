import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

const jsonData = [
  { id: 1, name: 'Genta Pradana Putra Agya' },
  { id: 1, name: 'A11.2021.13499' },
];


function App() {
  return (
    
    <div className='contianer'>
      
      

      <div>
        <div className="App">
          <h1>TUGAS REACT JS</h1>
          {jsonData.map(item => (
            <p>{item.name}</p>
          ))
          }
        </div>
    
        <div className="App container">
          <h1 className="text-danger">BootStrap</h1>
            <button className="btn btn-primary">Submit</button>
        </div>
        <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
        
      </div>
    </div>
  );
}



export default App;
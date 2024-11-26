import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/Summary';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    country: '',
    idDocument: null,
});
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
            <Routes>
                <Route path="/" element={<Step1 formData={formData} setFormData={setFormData} />} />
                <Route path="/step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
                <Route path="/step3" element={<Step3 formData={formData} setFormData={setFormData} />} />
                <Route path="/summary" element={<Summary formData={formData} />} />
            </Routes>
        </Router>
  );
}

export default App;

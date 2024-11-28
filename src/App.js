import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/Summary';
import ProgressBar from './components/ProgressBar';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        address: '',
        country: '',
        idDocument: null,
    });
    
    
    const [currentStep, setCurrentStep] = useState(1);

   
    const totalSteps = 4; 

    return (
        <Router>
            <div style={{ width: '50%', margin: '0 auto'}}>
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
                
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Step1
                                formData={formData}
                                setFormData={setFormData}
                                setCurrentStep={setCurrentStep}
                            />
                        }
                    />
                    <Route
                        path="/step2"
                        element={
                            <Step2
                                formData={formData}
                                setFormData={setFormData}
                                setCurrentStep={setCurrentStep}
                            />
                        }
                    />
                    <Route
                        path="/step3"
                        element={
                            <Step3
                                formData={formData}
                                setFormData={setFormData}
                                setCurrentStep={setCurrentStep}
                            />
                        }
                    />
                    <Route
                        path="/summary"
                        element={<Summary formData={formData} setCurrentStep={setCurrentStep} setFormData={setFormData}/>}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

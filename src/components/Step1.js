import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step1({ formData, setFormData, setCurrentStep  }) {
   const navigate = useNavigate();

   const handleNext = () => {
       setCurrentStep(2); 
       navigate('/step2');
   };

   return (
       <div>
           <h2>Step 1: Personal Information</h2>
           <form>
               <label>Name:</label>
               <input
                   type="text"
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   required
               />
               <label>Date of Birth:</label>
               <input
                   type="date"
                   value={formData.dob}
                   onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                   required
               />
               <button type="button" onClick={handleNext}>
                   Next
               </button>
           </form>
       </div>
   );
}

export default Step1;

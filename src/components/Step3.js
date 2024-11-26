import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step3({ formData, setFormData, setCurrentStep  }) {
   const navigate = useNavigate();

   const handleNext = () => {
    setCurrentStep(4);  // Update progress to Summary
       navigate('/summary');
   };

   const handleBack = () => {
    setCurrentStep(2);  // Update progress to Step 2
       navigate('/step2');
   };

   return (
       <div>
           <h2>Step 3: Document Upload</h2>
           <form>
               <label>ID Document:</label>
               <input
                   type="file"
                   onChange={(e) => setFormData({ ...formData, idDocument: e.target.files[0] })}
                   required
               />
               <button type="button" onClick={handleBack}>
                   Back
               </button>
               <button type="button" onClick={handleNext}>
                   Next
               </button>
           </form>
       </div>
   );
}

export default Step3;

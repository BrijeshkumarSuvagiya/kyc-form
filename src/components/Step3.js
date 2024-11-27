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
               <label style={{fontWeight:'bold'}}>ID Document:</label>
               <input
                   type="file"
                   onChange={(e) => setFormData({ ...formData, idDocument: e.target.files[0] })}
                   required
               />
                <div style={{display:"flex",marginTop: "10px"}}/>
                <div style={{display:'flex', justifyContent:'center'}}>
               <button style={{marginRight: '10px',padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleBack}>
                   Back
               </button>
               <button  style={{marginRight: '10px',padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleNext}>
                   Next
               </button>
               </div>
           </form>
       </div>
   );
}

export default Step3;

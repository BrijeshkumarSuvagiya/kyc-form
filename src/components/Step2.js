import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step2({ formData, setFormData, setCurrentStep  }) {
   const navigate = useNavigate();

   const handleNext = () => {
    setCurrentStep(3);  // Update progress to Step 3
       navigate('/step3');
   };

   const handleBack = () => {
    setCurrentStep(1);  // Update progress to Step 1
       navigate('/');
   };

   return (
       <div>
           <h2>Step 2: Address Details</h2>
           <form>
               <label  style={{fontWeight:'bold'}}>Address:</label>
               <input
                   type="text"
                   value={formData.address}
                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                   required
                   style={{padding:'10px',borderRadius: "10px",marginLeft:'15px'}}
               />
                <div style={{display:"flex",marginTop: "10px"}}/>
               <label  style={{fontWeight:'bold'}}>Country:</label>
               <select
                   value={formData.country}
                   onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                   style={{padding:'10px', borderRadius: "10px", marginLeft:'15px'}}
               >
                   <option value="">Select Country</option>
                   <option value="USA">USA</option>
                   <option value="Canada">Canada</option>
               </select>
               <div style={{display:"flex",marginTop: "10px"}}/>
               <div style={{display:'flex', justifyContent:'center'}}>
               <button style={{marginRight: '10px',padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleBack}>
                   Back
               </button>
               <button style={{padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleNext}>
                   Next
               </button>
               </div>
           </form>
       </div>
   );
}

export default Step2;

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
               <label style={{fontWeight:'bold'}}>Name:</label>
               <input
                   type="text"
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   required
                   style={{padding:'10px',borderRadius: "10px",marginLeft:'15px'}}
               />
               <div style={{display:"flex",marginTop: "10px"}}/>
               <label style={{fontWeight:'bold'}}>Date of Birth:</label>
               <input
                   type="date"
                   value={formData.dob}
                   onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                   required
                   style={{padding:'10px', borderRadius: "10px", marginLeft:'15px'}}
               />
                <div style={{display:"flex",marginTop: "10px"}}/>
                <div style={{display:'flex', justifyContent:'center'}}>
               <button style={{padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleNext}>
                   Next
               </button>
               </div>
           </form>
       </div>
   );
}

export default Step1;

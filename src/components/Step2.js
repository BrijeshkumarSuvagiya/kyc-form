import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step2({ formData, setFormData }) {
   const navigate = useNavigate();

   const handleNext = () => {
       navigate('/step3');
   };

   const handleBack = () => {
       navigate('/');
   };

   return (
       <div>
           <h2>Step 2: Address Details</h2>
           <form>
               <label>Address:</label>
               <input
                   type="text"
                   value={formData.address}
                   onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                   required
               />
               <label>Country:</label>
               <select
                   value={formData.country}
                   onChange={(e) => setFormData({ ...formData, country: e.target.value })}
               >
                   <option value="">Select Country</option>
                   <option value="USA">USA</option>
                   <option value="Canada">Canada</option>
               </select>
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

export default Step2;

import React from 'react';

function Summary({ formData }) {
   return (
       <div>
           <h2>Summary</h2>
           <p><strong>Name:</strong> {formData.name}</p>
           <p><strong>Date of Birth:</strong> {formData.dob}</p>
           <p><strong>Address:</strong> {formData.address}</p>
           <p><strong>Country:</strong> {formData.country}</p>
           <p><strong>ID Document:</strong> {formData.idDocument?.name || 'Not uploaded'}</p>
       </div>
   );
}

export default Summary;

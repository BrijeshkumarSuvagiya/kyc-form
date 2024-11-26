import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
 
   const progress = (currentStep / totalSteps) * 100;

   return (
       <div style={{ margin: '20px 0' }}>
           <div
               style={{
                   width: '100%',
                   backgroundColor: '#e0e0e0',
                   borderRadius: '10px',
                   height: '10px',
               }}
           >
               <div
                   style={{
                       width: `${progress}%`,
                       backgroundColor: '#4caf50',
                       height: '100%',
                       borderRadius: '10px',
                       transition: 'width 0.3s ease-in-out',
                   }}
               ></div>
           </div>
           <div style={{ textAlign: 'center', marginTop: '5px' }}>
               {Math.round(progress)}% Complete
           </div>
       </div>
   );
}

export default ProgressBar;

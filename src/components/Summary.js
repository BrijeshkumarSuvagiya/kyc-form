import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Summary({ formData, setCurrentStep }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  const handleBack = () => {
    setCurrentStep(3);
    navigate("/step3");
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleHome = () => {
   setCurrentStep(1);
    navigate("/");
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>Submission Successful!</h2>
        <p>
          Your KYC has been recorded. We will update you shortly about the
          status.
        </p>
        <button style={{border: 'none',padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}}  type="button" onClick={handleHome}>
                   Home
               </button>
      </div>
    );
  }
  return (
    <div>
      <h2>Summary</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Date of Birth:</strong> {formData.dob}
      </p>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
      <p>
        <strong>Country:</strong> {formData.country}
      </p>
      <p>
        <strong>ID Document:</strong>{" "}
        {formData.idDocument?.name || "Not uploaded"}
      </p>
      <div style={{display:"flex",marginTop: "10px"}}/>
      <div style={{display:'flex', justifyContent:'center'}}>
      <button style={{ border:'none',padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleBack}>
        Back
      </button>
      <button  style={{border:'none',marginLeft: "15px", padding:'10px', borderRadius:'15px', fontWeight:'bold',backgroundColor:'lightgreen'}} type="button" onClick={handleSubmit}>
        Submit
      </button>
      </div>
    </div>
  );
}

export default Summary;

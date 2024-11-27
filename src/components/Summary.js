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
        <button type="button" onClick={handleBack}>
                   Back
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
      <button type="button" onClick={handleBack}>
        Back
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <button type="button" onClick={handleHome}>
          Home
        </button>
    </div>
  );
}

export default Summary;

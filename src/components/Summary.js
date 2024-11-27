import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { SummaryContainer, SummaryHeading, InfoText, ButtonContainer, Button } from './SummaryStyles';  // Import styled components

function Summary({ formData, setCurrentStep, setFormData }) {
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
    setFormData('')
    setCurrentStep(1);
    navigate("/");
  };

  if (isSubmitted) {
    return (
      <SummaryContainer>
        <SummaryHeading>Submission Successful!</SummaryHeading>
        <InfoText>
          Your KYC has been recorded. We will update you shortly about the status.
        </InfoText>
        <Button onClick={handleHome}>Home</Button>
      </SummaryContainer>
    );
  }

  return (
    <SummaryContainer>
      <SummaryHeading>Summary</SummaryHeading>
      <InfoText><strong>Name:</strong> {formData.name}</InfoText>
      <InfoText><strong>Date of Birth:</strong> {formData.dob}</InfoText>
      <InfoText><strong>Address:</strong> {formData.address}</InfoText>
      <InfoText><strong>Country:</strong> {formData.country}</InfoText>
      <InfoText><strong>ID Document:</strong> {formData.idDocument?.name || "Not uploaded"}</InfoText>
      
      <ButtonContainer>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </ButtonContainer>
    </SummaryContainer>
  );
}

export default Summary;

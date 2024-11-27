import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Step3Container, Step3Heading, Label, FileInput, ButtonContainer, Button } from './Step3Styles';  // Import styled components

function Step3({ formData, setFormData, setCurrentStep }) {
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentStep(4);  
    navigate('/summary');
  };

  const handleBack = () => {
    setCurrentStep(2);  
    navigate('/step2');
  };

  return (
    <Step3Container>
      <Step3Heading>Step 3: Document Upload</Step3Heading>
      <form>
        <Label>ID Document:</Label>
        <FileInput
          type="file"
          onChange={(e) => setFormData({ ...formData, idDocument: e.target.files[0] })}
          required
        />
        <ButtonContainer>
          <Button type="button" onClick={handleBack}>
            Back
          </Button>
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        </ButtonContainer>
      </form>
    </Step3Container>
  );
}

export default Step3;

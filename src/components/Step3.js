import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Step3Container,
  Step3Heading,
  Label,
  FileInput,
  ButtonContainer,
  Button,
  ErrorText,
} from './Step3Styles'; 

function Step3({ formData, setFormData, setCurrentStep }) {
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formData.idDocument) {
      setError('Please select a file.'); // Show error if no file is selected
    } else {
      setError(''); // Clear error if file is selected
      setCurrentStep(4);
      navigate('/summary');
    }
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
          onChange={(e) => {
            setFormData({ ...formData, idDocument: e.target.files[0] });
            setError(''); // Clear error on file selection
          }}
          required
        />
        {error && <ErrorText>{error}</ErrorText>} {/* Display error message if validation fails */}
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

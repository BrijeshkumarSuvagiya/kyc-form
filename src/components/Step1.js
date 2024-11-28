import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Title,
    Form,
    Label,
    Input,
    ButtonContainer,
    Button,
    ErrorText,
} from './Step1Styles';

function Step1({ formData, setFormData, setCurrentStep }) {
    const [errors, setErrors] = useState({ name: '', dob: '' });
    const navigate = useNavigate();

    const validateForm = () => {
        let formIsValid = true;
        let nameError = '';
        let dobError = '';

        // Name validation
        if (!formData.name) {
            nameError = 'Name is required.';
            formIsValid = false;
        }

        // Date of Birth validation
        if (!formData.dob) {
            dobError = 'Date of Birth is required.';
            formIsValid = false;
        }

        // Set errors if any
        setErrors({ name: nameError, dob: dobError });

        return formIsValid;
    };

    const handleNext = () => {
        if (validateForm()) {
            setCurrentStep(2);
            navigate('/step2');
        }
    };

    return (
        <Container>
            <Title>Step 1: Personal Information</Title>
            <Form>
                <Label>Name:</Label>
                <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='FirstName LastName'
                    required
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}  {/* Display name error */}

                <Label>Date of Birth:</Label>
                <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    required
                />
                {errors.dob && <ErrorText>{errors.dob}</ErrorText>}  {/* Display DOB error */}

                <ButtonContainer>
                    <Button type="button" onClick={handleNext}>
                        Next
                    </Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
}

export default Step1;

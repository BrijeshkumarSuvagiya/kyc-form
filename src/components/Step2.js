import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Title,
    Form,
    Label,
    Input,
    Select,
    ButtonContainer,
    Button,
    ErrorText,
} from './Step2Styles';

function Step2({ formData, setFormData, setCurrentStep }) {
    const [errors, setErrors] = useState({ address: '', country: '' });
    const navigate = useNavigate();

    const validateForm = () => {
        let formIsValid = true;
        let addressError = '';
        let countryError = '';

        // Address validation
        if (!formData.address) {
            addressError = 'Address is required.';
            formIsValid = false;
        }

        // Country validation
        if (!formData.country) {
            countryError = 'Please select a country.';
            formIsValid = false;
        }

        // Set errors
        setErrors({ address: addressError, country: countryError });

        return formIsValid;
    };

    const handleNext = () => {
        if (validateForm()) {
            setCurrentStep(3); // Update progress to Step 3
            navigate('/step3');
        }
    };

    const handleBack = () => {
        setCurrentStep(1); // Update progress to Step 1
        navigate('/');
    };

    return (
        <Container>
            <Title>Step 2: Address Details</Title>
            <Form>
                <Label>Address:</Label>
                <Input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                    }
                    required
                    placeholder='123 First Street, NY - 0001'
                />
                {errors.address && <ErrorText>{errors.address}</ErrorText>} {/* Address error */}

                <Label>Country:</Label>
                <Select
                    value={formData.country}
                    onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                    }
                >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </Select>
                {errors.country && <ErrorText>{errors.country}</ErrorText>} {/* Country error */}

                <ButtonContainer>
                    <Button type="button" onClick={handleBack}>
                        Back
                    </Button>
                    <Button type="button" onClick={handleNext}>
                        Next
                    </Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
}

export default Step2;

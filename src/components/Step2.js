import React from 'react';
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
} from './Step2Styles';

function Step2({ formData, setFormData, setCurrentStep }) {
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentStep(3); // Update progress to Step 3
        navigate('/step3');
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
                />
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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Title,
    Form,
    Label,
    Input,
    ButtonContainer,
    Button,
} from './Step1Styles';

function Step1({ formData, setFormData, setCurrentStep }) {
    const navigate = useNavigate();

    const handleNext = () => {
        setCurrentStep(2);
        navigate('/step2');
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
                    required
                />
                <Label>Date of Birth:</Label>
                <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    required
                />
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

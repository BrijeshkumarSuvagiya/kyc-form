import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
     margin-top: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    background-color: lightgreen;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s, transform 0.3s;
    
    &:hover {
        background-color: green;
        color: white;
        transform: scale(1.05);
    }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 0.9rem;
    margin: 5px 0;
    margin-bottom: 15px;
`;

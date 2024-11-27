// Step2Styles.js
import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    width: calc(100% - 30px);
`;

export const Select = styled.select`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    width: calc(100% - 30px);
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    background-color: lightgreen;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s;

    &:hover {
        background-color: green;
        color: white;
    }

    &:last-child {
        margin-right: 0;
    }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 0.9rem;
    margin-top: -10px;
    margin-bottom: 15px;
`;

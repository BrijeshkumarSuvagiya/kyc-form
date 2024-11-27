// Step3Styles.js
import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;
    font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
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
`;

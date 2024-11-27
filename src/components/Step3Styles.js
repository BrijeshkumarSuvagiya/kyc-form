import styled from 'styled-components';

// Container for Step3 form
export const Step3Container = styled.div`
`;

// Heading style
export const Step3Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Style for form label
export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

// Style for file input
export const FileInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;
`;

// Style for the buttons container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Style for each button
export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: bold;
  border: none;
  margin-left: 10px;
  background-color: lightgreen;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: green;
    color: white;
    transform: scale(1.05);
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

import styled from 'styled-components';

// Container for the summary page
export const SummaryContainer = styled.div`
  margin: 0 auto;
  
`;

// Heading style
export const SummaryHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

// Style for the text displaying form data
export const InfoText = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  font-weight: normal;
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
  background-color: lightgreen;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin:  10px 10px;

  &:hover {
    background-color: green;
    color: white;
    transform: scale(1.05);
  }

  &:first-child {
    margin-right: 5px;
  }
`;

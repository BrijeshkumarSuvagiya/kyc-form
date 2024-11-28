# Project Name: KYC Form Application

## Description
This project is a multi-step form application built with React, which allows users to submit their KYC (Know Your Customer) information. The form includes the following steps:
1. **Step 1**: Personal Information (Name and Date of Birth)
2. **Step 2**: Address Information (Address and Country)
3. **Step 3**: Document Upload (User uploads an ID document)
4. **Summary**: Review the submitted information and submit the form

The application is designed to validate user input at each step and guide them through the process, displaying error messages for missing or invalid data.

## Features:
- Multi-step form with validation
- Form submission and success message
- Navigation between steps
- Document upload functionality
- Responsive design using styled-components

## ## Libraries and Tools Used:Technologies Used:
- **React**: JavaScript library for building user interfaces
- **React Router**: For routing and navigation between form steps
- **Styled-components**: For CSS-in-JS styling and component-based design
- **JavaScript**: Core scripting language for form validation and logic
- **npm**: For managing project dependencies

## How to Run Locally:

### Prerequisites:
- **Node.js**: Make sure you have Node.js installed. If not, download and install it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager (comes with Node.js) to manage project dependencies.

### Steps:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   npm install 
   npm start

## Additional Notes:

- The form includes validation checks for each input field. If required fields are missing or invalid, an error message is displayed prompting the user to fill in the missing details.
- The document upload feature allows users to upload a file (ID document), and it is validated to ensure a file is selected.

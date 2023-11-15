// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "description",
        message: "Write a Description",
    },
    {
        type: "input",
        name: "table of contents",
        message: "",
    },
    {
        type: "input",
        name: "installation",
        message: "Write Installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Write Usage instructions",
    },
    {
        type: "input",
        name: "license",
        message: "License:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Write the Contributors",
    },
    {
        type: "input",
        name: "tests",
        message: "How to run Tests",
    },
    {
        type: "input",
        name: "questions",
        message: "Contact information for Questions",
    },
];

// TODO: Create a function to write README file
function writeToFile("README.md", data) {
    const generateREADME = ({ description, installation, usage, license, contributing, tests, questions}) => 
    `# ${projectTitle}
    
    ## Descriptiong
    ${description}
    
    ## Table of Contents
    
    
    ## Install
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    ${license}
    
    ## Contributors
    ${contributing}
    
    ## Test
    ${tests}
    
    ## Questions
    ${questions}`

    fs.wrtiefile(README.md, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

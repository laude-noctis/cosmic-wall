// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Title of Your Project:",
    },
    {
        type: "input",
        name: "description",
        message: "Write a Description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Write Installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Write Usage instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT License",
            "Apache License 2.0",
            "GNU General Public License (GPL)",
            "GNU Lesser General Public License (LGPL)",
            "BSD 2-Clause License",
            "BSD 3-Clause License",
            "Mozilla Public License 2.0",
            "Creative Commons Attribution License",
            "The Unlicense",
            "ISC License",
            "Boost Software License 1.0",
            "Eclipse Public License 2.0",
            "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Write the Contributors:",
    },
    {
        type: "input",
        name: "tests",
        message: "How to run Tests:",
    },
    {
        type: "input",
        name: "email",
        message: "Input your email address:",
    },
    {
        type: "input",
        name: "github",
        message: "Input your github username:",
    },
];

// TODO: Create a function to write README file
const generateREADME = ({ projectTitle, description, installation, usage, license, contributing, tests, email, github}) => 
`# ${projectTitle} ${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license} 
${renderLicenseSection(license)} 
${renderLicenseLink(license)}

## Contributors
${contributing}

## Tests
${tests}

## Questions
For any questions, please contact me:
Email: ${email}

GitHub: https://github.com/${github}
`;

function writeToFile(filename, questions) {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        fs.writeFile(filename, readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("README.md created successfully! :)");
            }
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(`README.md`, questions);
}

// Function call to initialize app
init();

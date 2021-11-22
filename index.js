// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ {
        type: 'input',
        message: "What is your GitHub username? ",
        name: 'username',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid GitHub username is required !");
                return false;
            };
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name email Address?",
        name: 'email',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid name email Address is required !");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your project name?",
        name: 'title',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid project name is required !");
                return false;
            }
            return true;
        }
    },
    
    {
        type: 'input',
        message: "Short description of your project.",
        name: 'description',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid project description is required !");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "what command should to be run to install depedencies?",
        name: 'installation',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid command is required !");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What command should be run to run tests?",
        name: 'usage',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid answer is required !");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid answer is required !");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "what does the user need to know about constributing to the repo?",
        name: 'contrib',
        
        next_question: function (answer) {
            if (answer.length === 0) {
                console.log("A valid answer is required !");
                return false;
            }
            return true;
        }
    },    
    {
        type: 'list',
        message: "Choose a license for the project.",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3.0', 'None'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
                if (err) {
                  return console.log("error: "  + err);
                }
              
                console.log("Your README.md file has been generated successfully")
            });
}

// TODO: Create a function to initialize app
async function init() 
   {const responses = await inquirer.prompt(questions);
        
        console.log("Generating your README")
        const markdown = generateMD(responses);
        console.log(responses)
    
        // Write markdown to file
        writeToFile('DjREADME.md', markdown);
}

// Function call to initialize app
init();

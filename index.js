const inquirer = require('inquirer');
const fs = require('fs'); //file system
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./dist/generatePage');
console.log("⚫️ Hello! Please answer the following prompts to create your team. ⚫️");

const questions = [ 
    
    {
        type: 'input',
        name: 'Name',
        message: 'Enter your name.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email.')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Id',
        message: 'Enter your ID number.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your ID number.')
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'Role',
        message: 'Choose your role.',
        choices: [
            {
                name: 'Employee',
            }, 
            {
                name: 'Engineer',
            }, 
            {
                name: 'Intern',
            },
            {
                name: 'Manager',
            }

            
        
        ],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please choose your role.')
                return false;
            }
        }
        

    }

]

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Menu',
            message: 'Please select which option you would like to continue with:',
            choices: [
                'Add an Employee',
                'Add a Manager',
                'Add an Engineer',
                'Add an Intern',
                'Finish building my team'
            ]
        }
    ])
    // .then(userChoice => {
    //     switch (userChoice.Menu) {
    //         case "Add an Employee":
    //             promptEmployee();
    //             break;
    //         case "Add a Manager":
    //             promptManager();
    //             break;
    //         case "Add an Engineer":
    //             promptEngineer();
    //             break;
    //         case "Add an Intern":
    //             promptIntern();
    //             break;
    //         default:
    //             buildTeam();
            
    //     }
    // })

};

promptMenu(
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
    })
);

promptEmployee();
promptEngineer();
promptManager();
promptIntern();

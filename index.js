const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const index = require('./index')
const fs = require('fs'); //file system
console.log("🔵🔵🔵🔵 Hello! Please answer the following prompts to create your team. 🔵🔵🔵🔵")

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

//.then(answers => {
 // console.log(questions);
    //const employee = new Employee(answers.Name, answers.Email, answers.Id, answers.Role);
    //teamMembers.push(employee);
 //  promptMenu();
//})

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Menu',
            message: 'Please select which option you would like to continue with:',
            choices: [
                'Add a Manager',
                'Add an Engineer',
                'Add an Intern',
                'Finish building my team'
            ]
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "Add a Manager":
                promptManager();
                break;
            case "Add an Engineer":
                promptEngineer();
                break;
            case "Add an Intern":
                promptIntern();
                break;
            default:
                buildTeam();
            
        }
    });
};

//const promptEngineer = () => {
//    console.log(`🟢ADD AN ENGINEER🟢`);
//    return inquirer.prompt([
//        {
 //           type: 'input',
 //           name: 'Name',
  //          message: 'What is the name of the Engineer?'
   //         validate: engineerName => {
   //             if (engineerName) {
  //                  return true;
   //             } else {
  //                  console.log('Please enter the name of the Engineer.')
   //                 return false;
   //             }
  //          }
  //      }
 //   ]);
//};
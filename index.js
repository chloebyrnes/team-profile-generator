const inquirer = require('inquirer');
const fs = require('fs'); //file system
const path = require('path');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/generatePage');
console.log("⚫️ Hello! Please answer the following prompts to create your team. ⚫️");

const teamMembers = [];
const promptManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Enter your Managers name.',
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
            name: 'id',
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
            type: 'input',
            name: 'email',
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
            name: 'number',
            message: 'Enter your office number.',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number.')
                    return false;
                }
            }
        },

    ]).then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.number)
        teamMembers.push(manager)
    })
} 





const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Please select which option you would like to continue with:',
            choices: [
                'Engineer',
                'Intern'
            ]
        },

        {
            type: 'input',
            name: 'name',
            message: 'Enter Employees name.'
            
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter Employees ID.'
            
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter Employees email.'
            
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter Engineers Github.',
            when: ({employee}) => {
                if(employee === 'Engineer'){
                    return true;
                } else {
                    return false;
                }
            }
            
        },

        {
            type: 'input',
            name: 'school',
            message: 'Enter Interns school.',
            when: ({employee}) => {
                if(employee === 'Intern'){
                    return true;
                } else {
                    return false;
                }
            }
            
        },

        {
            type: 'list',
            name: 'confirmaddnew',
            message: 'Would you like to add another member?',
            choices: [
                'Yes',
                'No'
            ]
            
        },

    ])
    .then(employeeAnswers => {
        if(employeeAnswers.employee === 'Engineer') {
            const newEmployee = new Engineer (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.github);
            teamMembers.push(newEmployee)
        } else if (employeeAnswers.employee = 'Intern') {
            const newEmployee = new Intern (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.school);
            teamMembers.push(newEmployee)
        } if(employeeAnswers.confirmaddnew === 'Yes')  return promptEmployee();
        else if(employeeAnswers.confirmaddnew === 'No') return teamMembers;
    })
    
    
};

const writeFile = data => {
    console.log(data);
    fs.writeFile('./dist/index.html', data, err => {
        if(err){
            console.log(err);
            return;
        }
        console.log('🟢 SUCCESS! Page created. 🟢')
    })
}

promptManager()
.then(promptEmployee)
.then(teamMembers => generatePage(teamMembers))
.then(pageHTML => writeFile(pageHTML))

// promptEmployee();
// promptEngineer();
// promptManager();
// promptIntern();

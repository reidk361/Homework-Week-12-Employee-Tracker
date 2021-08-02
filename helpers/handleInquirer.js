const inquirer = require('inquirer');
const Department = require('../models/department');
const Employee = require('../models/employee');
const Role = require('../models/role');

let employeeChoices = (Employee.findAll().then((data) => {
    return (data);
}));
let roleChoices = (Role.findAll().then((data) => {
    return (data);
}));
let departmentChoices = (Department.findAll().then((data) => {
    return (data);
}));

console.log(employeeChoices);
console.log(roleChoices);
console.log(departmentChoices);

function userOptions(){
    return inquirer.prompt([
        {name: 'optionTree',
        message: 'Will this be your last employee entry?',
        type: 'list',
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Remove an Employee"]},
    ])
}

function addDepartment(){
    return inquirer.prompt([
        {name: 'depName',
        message: 'What is the name of the department?',
        type: 'input',}
    ])
}

function addRole(){
    return inquirer.prompt([
        {name: 'roleName',
        message: 'What is the name of this role?',
        type: 'input',},
        {name: 'salary',
        message: 'What is the hourly salary of this role?',
        type: 'number',},
        {name: 'depName',
        message: "What is the name of this role's department ID?",
        type: 'input',}
    ])
}

function addEmployee(){
    return inquirer.prompt([
        {name: 'firstName',
        message: 'What is their first name?',
        type: 'input',},
        {name: 'lastName',
        message: 'What is their last name?',
        type: 'input',},
        {name: 'roleName',
        message: 'What is their role ID?',
        type: 'input',},
        {name: 'managerName',
        message: "What is their manager's ID?",
        type: 'input',}
    ])
}

function updateEmployee(){
    let employeeChoices = (Employee.findAll().then((data) => {
        return (data);
    }));
    let roleChoices = (Role.findAll().then((data) => {
        return (data);
    }));
    return inquirer.prompt([
        {name: 'employeeSelection',
        message: 'Select employee to update via ID',
        type: 'list',
        choices: [employeeChoices.id]},
        {name: 'newRole',
        message: 'What is their new role ID?',
        type: 'list',
        choices: [roleChoices.id]},
    ]);
}

function removeEmployee(){
    let employeeChoices = (Employee.findAll().then((data) => {
        return (data);
    }));
    return inquirer.prompt([
        {name: 'employeeSelection',
        message: 'Select employee to remove via ID',
        type: 'list',
        choices: [employeeChoices.id]},
        {name: 'confirmDelete',
        message: 'Are you sure you want to remove this employee?',
        type: 'confirm'},
    ]);
}

async function optionHandler(){
    let input = await userOptions();
    if (input.optionTree === "View all Departments"){
        Department.findAll().then((data) => {
            console.table(data);
        });
    } else if (input.optionTree === "View all Roles"){
        Role.findAll().then((data) => {
            console.table(data);
        });
    } else if (input.optionTree === "View all Employees"){
        Employee.findAll().then((data) => {
            console.table(data);
        });
    } else if (input.optionTree === "Add a Department"){
        let addNewDepartment = await addDepartment();
        Department.create([
            {
              name: addNewDepartment.depName
            }
        ]);
    } else if (input.optionTree === "Add a Role"){
        let addNewRole = await addRole();
        Role.create([
            {
              title: addNewRole.roleName,
              salary: addNewRole.salary,
              department: addNewRole.depName
            }
        ]);
    } else if (input.optionTree === "Add an Employee"){
        let addNewEmployee = await addEmployee();
        Employee.create([
            {
              firstName: addNewEmployee.firstName,
              lastName: addNewEmployee.lastName,
              role: addNewEmployee.roleName,
              manager: addNewEmployee.managerName
            }
        ]);
    } else if (input.optionTree === "Update an Employee Role"){
        let updateAnEmployee = await updateEmployee();
        Employee.update(
            {
                role: updateAnEmployee.roleName
            },
            {
                where: {
                 id: updateAnEmployee.employeeSelection,
                }
            }
        )
    } else if (input.optionTree === "Remove an Employee"){
        let removeAnEmployee = await removeEmployee();
        if (removeAnEmployee.confirmDelete){
           Employee.destroy(
                {
                    where: {
                    id: removeAnEmployee.employeeSelection,
                    }
                }
            ) 
        } else {
            return;
        }
    }
}



module.exports = optionHandler;
const inquirer = require('inquirer');

function userOptions(){
    return inquirer.prompt([
        {name: 'optionTree',
        message: 'Will this be your last employee entry?',
        type: 'list',
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]},
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
        message: "What is the name of this role's department?",
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
        message: 'What is their role?',
        type: 'input',},
        {name: 'managerName',
        message: 'What is the name of their manager?',
        type: 'input',}
    ])
}

function removeEmployee(){}
function updateEmployee(){}

Employee.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
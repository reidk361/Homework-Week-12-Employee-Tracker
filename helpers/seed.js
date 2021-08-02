const Department = require('../models/department');
const Employee = require('../models/employee');
const Role = require('../models/role');

function seed() {
    Department.bulkCreate([
        {
            name: "IT"
        },
        {
            name: "Sales"
        },
        {
            name: "R&D"
        }
        
    ])
    Employee.bulkCreate([
        {
            first_name: "John",
            last_name: "Smith",
            role_id: "1",
            manager_id: "1"
        },
        {
            first_name: "Jane",
            last_name: "Doe",
            role_id: "2",
            manager_id: "1"
        },
        {
            first_name: "Mary",
            last_name: "Jane",
            role_id: "3",
            manager_id: "3"
        },
        {
            first_name: "Cody",
            last_name: "Wheeler",
            role_id: "4",
            manager_id: "3"
        },
        {
            first_name: "Malory",
            last_name: "Sterling",
            role_id: "5",
            manager_id: "5"
        },
        {
            first_name: "Archer",
            last_name: "Sterling",
            role_id: "6",
            manager_id: "5"
        }

    ])
    Role.bulkCreate([
        {
            title: "IT Manager",
            salary: 30.50,
            department_id: "1"
        },
        {
            title: "Admin",
            salary: 27.50,
            department_id: "1"
        },
        {
            title: "Sales Manager",
            salary: 28.50,
            department_id: "2"
        },
        {
            title: "Salesman",
            salary: 23.50,
            department_id: "2"
        },
        {
            title: "R&D Manager",
            salary: 32.50,
            department_id: "3"
        },
        {
            title: "Researcher",
            salary: 29.50,
            department_id: "3"
        },

    ])
}

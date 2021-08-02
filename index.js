const {  optionHandler  } = require('./helpers/handleInquirer');
const Department = require('./models/department');
const Employee = require('./models/employee');
const Role = require('./models/role');

async function init() {
    await optionHandler();
}

init();
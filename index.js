//const {  db  } = require('./config/connection');
const {  optionHandler  } = require('./helpers/handleInquirer')

async function init() {
    await optionHandler();
}

init();
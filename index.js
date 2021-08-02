const {  optionHandler  } = require('./helpers/handleInquirer')

async function init() {
    await optionHandler();
}

init();
const readlineSync = require('readline-sync');

module.exports = (inputText) => {
  inputText(readlineSync.question('Várom a parancsot:'));
};

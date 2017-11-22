module.exports = (outputText, color) => {
  colorpicker = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m'
  };
  console.log(colorpicker.color, outputText);
};

const Calculator = require('./Calculator.js');
const AddCommand = require('./Add.js');

const calc = new Calculator();
calc.executeCommand(new AddCommand(10));
console.log(calc.value);
calc.undoCommand();
console.log(calc.value);

'use strict';

const minimist = require('minimist');

class Input {

  constructor() {
    // get the arguments from user
    // process.argv returns an array of inputs
    // the inputs at 0 and 1 index are automatic, while the inputs at index 2 are the values input by the user
    // by slicing the array at index 2 onward, we are capturing only the user input values
    const args = minimist (process.argv.slice(2));

    // instantiating aNote as an empty string
    this.aNote = '';

    // check property runs checkArg method, passing in user-input arguments
    this.check = this.checkArg(args);

    // payload property is an object containing the action (argument) to perform, and the message to pass in
    this.payload = {
      action: 'add',
      payload: this.aNote,
    };
  }

  checkArg(args) {
    // if argument is -a, run aOrAdd method
    if ('a' in args) {
      this.aNote = this.aOrAdd(args.a);
    // if argument is --add, run aOrAdd method  
    } else if ('add' in args) {
      this.aNote = this.aOrAdd(args.add);
    }
  }

  aOrAdd(message) {
    // if user inputs a string, and the string is not empty, return the string
    // else, return an error message
    return (typeof message === 'string' && message.length > 0) ? (message) : (console.error('please provide text input and use valid flags: either -a or --add'));
  }

} 

module.exports = Input;

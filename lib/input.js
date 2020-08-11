'use strict';

// const isUrl = require('is-url');
const minimist = require('minimist');

function Input() {
  // get the arguments from user
  const args = minimist(process.argv.slice(2));

  // instantiating aNote as an empty string
  this.aNote = '';

  // check property runs checkArg method, passing in argument
  this.check = this.checkArg(args);

  // payload property is an object containing the action (argument) to perform, and the message to pass in
  this.payload = {
    action: 'add',
    payload: this.aNote,
  };
}

Input.prototype.checkArg = function (args) {
  
  // if argument is -a, run aOrAdd function
  if ('a' in args) {
    this.aNote = this.aOrAdd(args.a);

  // if argument is --add, run aOrAdd function
  } else if ('add' in args) {
    this.aNote = this.aOrAdd(args.add);
  }

};

Input.prototype.aOrAdd = function (message) {
  // if user inputs a string, and the string is not empty, return the string
  // else, return an error message

  return (typeof message === 'string' && message.length > 0) ? (message) : (console.error('please provide text input'));

};

module.exports = Input;
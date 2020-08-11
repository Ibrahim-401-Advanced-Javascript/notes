// #!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const options = new Input();

new Note(options.aNote).execute(options);

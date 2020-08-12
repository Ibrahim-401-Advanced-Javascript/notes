// #!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const input = new Input();

new Note(input.aNote).execute(input);

// #!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notes', {useNewUrlParser: true, useUnifiedTopology: true});

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const input = new Input();

new Note(input.aNote).execute(input);

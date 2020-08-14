'use strict';

const DbActions = require('./model/notes-collection.js');

// Note class
class Note {
  // properties of Note class
  constructor(message) {
    // message is text input by the user
    this.message = message;
    // payload is an object with properties action(i.e. add) & payload(input message)
    this.payload = null;
  }

  //
  async execute(opts) {

    this.payload = opts.payload;

    if (this.payload.action === 'add') {
      return this.add(opts);
    }
    if (this.payload.action === 'list') {
      return this.list(opts.category);
    }
    if (this.payload.action === 'delete') {
      return this.delete(opts.id);
    }

  }

  //
  async add(opts) {

    await new DbActions().create(opts);

    console.log('');
    console.log('Note Saved:', opts.aNote);
    console.log('');

  }

  //
  async list(categ) {

    let listNotes = await new DbActions().get(categ);

    listNotes.forEach( (note) => {
      console.log('');
      console.log(note.text);
      console.log('Category:', note.category, ' ID:', note._id);
      console.log('--------------------------------');
    });

  }

  //
  async delete(id) {

    await new DbActions().delete(id);
    console.log('Deleted Note', id);

  }

}

module.exports = Note;

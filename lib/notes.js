'use strict';

const NotesModel = require('./model/notes-schema.js');


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

    console.log('opts: ', opts);
    this.payload = opts.payload;

    if (this.payload.action === 'add') {
      return this.add(opts);
    }
    if (this.payload.action === 'list') {
      return this.list(opts.category);
    }
    if (this.payload.action === 'delete') {
      return this.delete(opts._id);
    }
  }

  //
  async add(opts) {

    const addNote = new NotesModel({
      text: opts.aNote, 
      category: opts.category,
    });

    await addNote.save();
  }

  //
  async list(categ=null) {

    let listNotes;

    if (categ === null) {
      listNotes = await NotesModel.find({});
    } else {
      listNotes = await NotesModel.find({category: categ});
    }

    // console.log('Notes: ', listNotes);
    
    listNotes.forEach( (note) => {
      console.log(note.text);
      console.log('Category:', note.category, ' ID:', note._id);
      console.log('-------------------');
    });
  }

  async delete(id) {
    // console.log('gotta delete sumn', id);
    await NotesModel.deleteOne( {_id : id});
  }

}

module.exports = Note;

'use strict';

const Notes = require('./notes-schema.js');

class DbActions {

  async get(categ=null) {

    let listNotes;

    if (categ === null) {
      listNotes = await Notes.find({});
    } else {
      listNotes = await Notes.find({category: categ});
    }

    return listNotes;
  }

  async create(opts) {

    let addNote;

    if (opts.category === null) {
      addNote = new Notes({
        text: opts.aNote, 
      });
    } else {
      addNote = new Notes({
        text: opts.aNote, 
        category: opts.category,
      });
    }

    await addNote.save();

    return addNote;
  }

  // async update() {

  // }

  async delete(id) {

    let ObjectId = require('mongodb').ObjectId;
    await Notes.deleteOne({_id: new ObjectId(id)});

  }

}

module.exports = DbActions;
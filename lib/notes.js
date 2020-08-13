// Note class
class Note {
  // properties of Note class
  constructor(aNote) {
    // aNote is text input by the user
    this.aNote = aNote;
    // payload is an object with properties action(i.e. add) & payload(input message)
    this.payload = null;
  }

  execute(opts) {
    this.payload = opts.payload;

    if (this.payload.action === 'add') {
      return this.add(this.payload);
    }
  }

  add(opts) {
    if (opts.payload) {
      this.note = {
        'text': this.aNote,
        'category': '',
        'id': '',
      };
      console.log(this.note);
      console.log('Adding Note: ', this.aNote);
    }

    // need to add save functionality
  }

  delete(id) {
    // need to add remove from db functionality
  }

  list(category) {
    // need to add list by category functionality
  }

}

module.exports = Note;

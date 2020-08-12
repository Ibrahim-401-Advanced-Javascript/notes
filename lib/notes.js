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
        'id': (Math.ceil(Math.random()*100)),
        'text': this.aNote,
      };
      console.log('Adding Note: ', this.aNote);
    }
  }

}

module.exports = Note;

//need constructor

const Note = function(txt) {
  this.aNote = txt;
  this.payload = null;
};

Note.prototype.execute = function (opts) {
  
  this.payload = opts.payload;
  
  // pass payload values into Note.prototype.add if the action is "add"
  if (this.payload.action === 'add' ) {
    return this.add(this.payload);
  }
};

Note.prototype.add = function(opts) {
  // if the payload object has payload text:
  // - create the note object
  // - log the payload text with a confirmation message
  if (opts.payload) {
    this.note = {
      'id': (Math.ceil(Math.random()*100)),
      'text': this.aNote,
    };
    console.log('Adding Note: ', this.aNote);
  }
};

module.exports = Note;
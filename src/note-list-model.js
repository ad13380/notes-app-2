(function(exports) {
  function NoteList() {
    this.notesArray = [];
  }

  NoteList.prototype.addNote = function(note) {
    this.notesArray.push(new NoteSingle(note))
  }

  NoteList.prototype.getNotes = function() {
    return this.notesArray;
  }

  exports.NoteList = NoteList;
})(this);

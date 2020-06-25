(function(exports) {
  function NoteList() {
    this.notesArray = [];
    this.noteId = 0;
  }

  NoteList.prototype.addNote = function(note) {
    this.notesArray.push(new NoteSingle(note, this.noteId))
    this.noteId++;
  }

  NoteList.prototype.getNotes = function() {
    return this.notesArray;
  }

  exports.NoteList = NoteList;
})(this);

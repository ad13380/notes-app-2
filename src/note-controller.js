(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.renderHTML = function() {
    this._addNote('Fav drink: seltzer') // change later
    document.getElementById('app').innerHTML = this._returnNoteView().returnHTML();
  }

  NoteController.prototype._returnNoteView = function() {
    return new NoteView(this.noteList);
  }

  NoteController.prototype._addNote = function(note) {
    this.noteList.addNote(note);
  }

  exports.NoteController = NoteController
})(this);

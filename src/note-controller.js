(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.renderHTML = function() {
    document.getElementById('app').innerHTML = this._returnNoteView().returnHTML();
  }

  NoteController.prototype._returnNoteView = function() {
    return new NoteView(this.noteList);
  }

  exports.NoteController = NoteController
})(this);

// for each note we want to get the href url
// this needs to be created on the fly and packaged inside the returnHTML in note-list-view
//
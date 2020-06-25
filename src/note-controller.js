(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.renderHTML = function() {
    this._listen();
    document.getElementById('app').innerHTML = this._returnNoteView().returnHTML();
  }

  NoteController.prototype._listen = function() {
    window.addEventListener("hashchange", () => { 

      console.log(this._returnNoteModelForURL().note())
           
    });
  };

  NoteController.prototype._returnNoteView = function() {
    return new NoteView(this.noteList);
  }

  NoteController.prototype._returnSingleNoteView = function() {
    return new SingleNoteView(this._returnNoteModelForURL);
  }

  NoteController.prototype._returnNoteModelForURL = function() {
    var noteModel = this.noteList.getNotes().filter(element => {
      return element.getId().toString() === this._returnIdFromURL(window.location);
    })[0];
    return noteModel;
  }

  NoteController.prototype._returnIdFromURL = function(location) {
    return location.hash.split("#")[1].split("/")[1];
  }

  exports.NoteController = NoteController
})(this);

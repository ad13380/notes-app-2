(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.renderHTML = function() {
    //this.noteList.addNote('hello');
    document.getElementById('app').innerHTML = this._returnNoteView().returnHTML();
    this._rednerHTMLOnNoteClick();
    this._getSubmittedText();
  }

  NoteController.prototype._addFormNote = function() {
    this.noteList.addNote(this._getSubmittedText());
  }

  NoteController.prototype._getSubmittedText = function() {
    document.getElementById('text').addEventListener('submit', (event) => { 
      event.preventDefault();
      this.noteList.addNote(event.target[0].value);
      console.log(event.target[0].value)
      return event.target[0].value;
    });
  };

  NoteController.prototype._rednerHTMLOnNoteClick = function() {
    window.addEventListener("hashchange", () => { 
      document.getElementById('app').innerHTML = this._returnSingleNoteView().returnHTML();
    });
  };

  NoteController.prototype._returnNoteView = function() {
    return new NoteView(this.noteList);
  }

  NoteController.prototype._returnSingleNoteView = function() {
    return new SingleNoteView(this._returnNoteModelFromURL());
  }

  NoteController.prototype._returnNoteModelFromURL = function() {
    return this.noteList.getNotes().filter(element => {
      return element.getId().toString() === this._returnIdFromURL(window.location);
    })[0];
  }

  NoteController.prototype._returnIdFromURL = function(location) {
    return location.hash.split("#")[1].split("/")[1];
  }

  exports.NoteController = NoteController
})(this);

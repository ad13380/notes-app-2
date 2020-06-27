(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.returnHTML = function() {
    if (!this.noteList) { return null }

    var HTMLString = this.noteList.getNotes().reduce((acc, val) => {
      return acc += '<li><div>' 
      + `<a href='#notes/${val.getId()}'>`
      + this._preview(val.note()) 
      + '</a></div></li>';
    }, '<ul>');
    return HTMLString += '</ul>';
  }

  NoteView.prototype._preview = function(string) {
    return string.slice(0,20);
  }

  exports.NoteView = NoteView;
})(this);

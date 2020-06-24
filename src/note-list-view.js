(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.returnHTML = function() {
    if (!this.noteList) { return null }
    
    let HTMLString = this.noteList.getNotes().reduce(function(acc, val) {
      return acc += '<li><div>' + val.note().slice(0,20) + '</div></li>';
    }, '<ul>');
    HTMLString += '</ul>';
    return HTMLString;
  }

  NoteView.prototype._preview = function(string) {
    return string.slice(0,20);
  }

  exports.NoteView = NoteView;
})(this);

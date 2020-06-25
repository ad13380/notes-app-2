(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.returnHTML = function() {
    if (!this.noteList) { return null }

    var this_test = this // reassign 'this' to 'this_test'

    var HTMLString = this.noteList.getNotes().reduce(function(acc, val) {
      return acc += '<li><div>' + this_test._preview(val.note()) // use 'this_test'
      + '</div></li>';
    }, '<ul>');
    HTMLString += '</ul>';
    return HTMLString;
  }

  NoteView.prototype._preview = function(string) {
    return string.slice(0,20);
  }

  exports.NoteView = NoteView;
})(this);

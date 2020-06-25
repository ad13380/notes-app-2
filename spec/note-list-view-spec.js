(function testNoteViewReturnsNullForNoNotes() {
  var noteView = new NoteView();
  assert.isTrue(noteView.returnHTML() === null);
})();

(function testNoteViewReturnsHTMLForOneNote() {
  var noteList = new NoteList();
  noteList.addNote('Note 1');
  var noteView = new NoteView(noteList);
  expected_result = "<ul><li><div><a href='#notes/0'>Note 1</a></div></li></ul>"
  assert.isTrue(noteView.returnHTML() === expected_result);
})();

(function testNoteViewReturnsHTMLForSeveralNotes() {
  var noteList = new NoteList();
  noteList.addNote('Note 1');
  noteList.addNote('Note 2');
  var noteView = new NoteView(noteList);
  expected_result = "<ul><li><div><a href='#notes/0'>Note 1</a></div></li>"
  expected_result += "<li><div><a href='#notes/1'>Note 2</a></div></li></ul>"
  assert.isTrue(noteView.returnHTML() === expected_result);
})();

(function testNoteViewReturnsOnlyTwentyChars() {
  var noteList = new NoteList();
  noteList.addNote('Favourite food: pesto');
  var noteView = new NoteView(noteList);
  expected_result = "<ul><li><div><a href='#notes/0'>Favourite food: pest</a></div></li></ul>"
  assert.isTrue(noteView.returnHTML() === expected_result);
})();

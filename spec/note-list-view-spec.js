(function testNoteViewReturnsNullForNoNotes() {
  var noteView = new NoteView();
  assert.isTrue(noteView.returnHTML() === null);
})();

(function testNoteViewReturnsHTMLForOneNote() {
  var noteList = new NoteList();
  noteList.addNote('Note 1');
  var noteView = new NoteView(noteList);
  expected_result = '<ul><li><div>Note 1</div></li></ul>'
  assert.isTrue(noteView.returnHTML() === expected_result);
})();

(function testNoteViewReturnsHTMLForSeveralNotes() {
  var noteList = new NoteList();
  noteList.addNote('Note 1');
  noteList.addNote('Note 2');
  var noteView = new NoteView(noteList);
  expected_result = '<ul><li><div>Note 1</div></li>'
  expected_result += '<li><div>Note 2</div></li></ul>'
  assert.isTrue(noteView.returnHTML() === expected_result);
})();

(function testNoteViewReturnsOnlyTwentyChars() {
  var noteList = new NoteList();
  noteList.addNote('Favourite food: pesto');
  var noteView = new NoteView(noteList);
  expected_result = '<ul><li><div>Favourite food: pest</div></li></ul>'
  assert.isTrue(noteView.returnHTML() === expected_result);
})();

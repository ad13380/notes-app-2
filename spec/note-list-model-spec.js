(function testNoteListStoresNotes() {
  var noteList = new NoteList();
  noteList.addNote('note 1')
  noteList.addNote('note 2')
  expected_result = ["note 1", "note 2"]
  assert.isTrue(noteList.getNotes().length === 2);
  for (var i = 0; i < expected_result.length; i++) {
    assert.isTrue(noteList.getNotes()[i].note() === expected_result[i]);
  }
})();

(function testNoteListAssignsId() {
  var noteList = new NoteList();
  noteList.addNote('note 1')
  noteList.addNote('note 2')
  expected_result = [0, 1]
  for (var i = 0; i < expected_result.length; i++) {
    assert.isTrue(noteList.getNotes()[i].getId() === expected_result[i]);
  }
})();
(function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController);
})();

(function testNoteControllerModifiesElement() {
  var noteList = new NoteList();
  noteList.addNote('note 1')
  var noteController = new NoteController(noteList);
  noteController.renderHTML();
  expected_result = '<ul><li><div>note 1</div></li>'
  expected_result += '<li><div>Fav drink: seltzer</div></li></ul>'
  assert.isTrue(document.getElementById('app').innerHTML === expected_result);
})();
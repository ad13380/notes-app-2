(function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController);
})();

(function testNoteControllerModifiesElement() {
  var noteList = new NoteList();
  noteList.addNote('Controller note 1')
  noteList.addNote('Controller note 2')
  var noteController = new NoteController(noteList);
  noteController.renderHTML();
  expected_result = '<ul><li><div>Controller note 1</div></li>'
  expected_result += '<li><div>Controller note 2</div></li></ul>'
  assert.isTrue(document.getElementById('app').innerHTML === expected_result);
})();
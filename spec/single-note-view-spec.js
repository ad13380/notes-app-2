(function testSingleNoteViewReturnsNullForNoNotes() {
  var singleNoteView = new SingleNoteView();
  assert.isTrue(singleNoteView.returnHTML() === null);
})();

(function testSingleNoteViewReturnsHTMLForSingleNote() {
  var noteSingle = new NoteSingle('Favourite food: pesto');
  var singleNoteView = new SingleNoteView(noteSingle);
  expected_result = '<div>Favourite food: pesto</div>'
  assert.isTrue(singleNoteView.returnHTML() === expected_result);
})();
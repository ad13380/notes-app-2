(function testNoteStoresNote() {
  var noteSingle = new NoteSingle('My favourite language is JavaScript');
  assert.isTrue(noteSingle.note() === 'My favourite language is JavaScript');
})();

(function testNoteStoresId() {
  var noteSingle = new NoteSingle('My favourite language is JavaScript', 99);
  assert.isTrue(noteSingle.getId() === 99);
})();
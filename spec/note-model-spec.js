(function testNoteStoresNote() {
  var noteSingle = new NoteSingle('My favourite language is JavaScript');
  assert.isTrue(noteSingle.note() === 'My favourite language is JavaScript');
})();
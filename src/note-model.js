(function(exports) {
  function NoteSingle(note) {
    this.text = note;
  }

  NoteSingle.prototype.note = function() {
    return this.text;
  }

  exports.NoteSingle = NoteSingle;
})(this);

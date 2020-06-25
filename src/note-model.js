(function(exports) {
  function NoteSingle(note, id = null) {
    this.text = note;
    this.id = id;
  }

  NoteSingle.prototype.note = function() {
    return this.text;
  }

  NoteSingle.prototype.getId = function() {
    return this.id;
  }

  exports.NoteSingle = NoteSingle;
})(this);

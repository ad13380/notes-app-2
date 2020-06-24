(function(exports) {
  function SingleNoteView(noteSingle) {
    this.noteSingle = noteSingle;
  }

  SingleNoteView.prototype.returnHTML = function() {
    if (!this.noteSingle) { return null }
    
    return `<div>${this.noteSingle.note()}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
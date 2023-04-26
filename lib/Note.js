class Note {
    constructor(title, text) {
      if (typeof title !== "string" || !title.trim().length) {
        throw new Error("Expected parameter 'title' to be a non-empty string");
      }
      if (typeof text !== "string" || !text.trim().length) {
        throw new Error("Expected parameter 'title' to be a non-empty string");
      }
      this.title = title;
      this.text = text;
    }
  }
  
  module.exports = Note;
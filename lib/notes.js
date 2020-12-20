const fs = require("fs");
const path = require("path");

// This function handles new note creation
function addNewNote(body, notesArr) {
  const note = body;
  notesArr.push(note);
  // This increments the id number for the next note
  let nextId = parseInt(note.id) + 1;
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArr, nextId }, null, 2)
  );
  return note;
}

// This function validates note format, requiring a title and text
function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

// This function handles note deletion
function deleteNote(index, notesArr, nextId) {
    // Splice the index that was passed in
  notesArr.splice(index, 1);
  // ReWrites the file with the updated information and nextId
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArr, nextId }, null, 2)
  );
  return;
}

module.exports = {
  validateNote,
  addNewNote,
  deleteNote,
};

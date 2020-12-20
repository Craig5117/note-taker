const fs = require('fs');
const path = require('path');


function addNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    let nextId = parseInt(note.id) + 1;
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr, nextId}, null, 2)
    );
    return note;
}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(index, notesArr, nextId) {
    notesArr.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr, nextId}, null, 2)
    );
    return;
}

module.exports = {
    validateNote,
    addNewNote,
    deleteNote,
}
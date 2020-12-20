function addNewNote(body, notesArr) {
    console.log(body);
    return body;
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

module.exports = {
    validateNote,
    addNewNote,
}
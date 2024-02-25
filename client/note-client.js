const baseUrl = "http://localhost:3000";

async function addNote(noteData) {
    const response = await fetch(`${baseUrl}/notes/add`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(noteData)
    });
    return response;
}

async function updateNote(noteData) {
    const response = await fetch(`${baseUrl}/note/update`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(noteData)
    });
    return response;
}

async function deleteNote(noteId) {
    const response = await fetch(`${baseUrl}/note/delete/${noteId}`, {
        method: "DELETE"
    });
    return response;
}

async function getNoteById(noteId) {
    const response = await fetch(`${baseUrl}/note/${noteId}`);
    return response.json();
}

async function getNotes(noteTitle) {
    let url = `${baseUrl}/notes/all`;
    if(noteTitle) {
        url += `/?title=${noteTitle}`;
    }
    const response = await fetch(url);
    return response.json();
}
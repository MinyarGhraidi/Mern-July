const NoteControllers = require("../controllers/Note.controllers")

module.exports = (app) => {
    app.get("/api/notes", NoteControllers.findALLNote)
    app.post("/api/notes", NoteControllers.makeNote)
    app.get("/api/notes/:id", NoteControllers.findOneNote)
    app.put("/api/notes/:id", NoteControllers.updateOneNote)
    app.delete("/api/notes/:id", NoteControllers.deleteNote)
}
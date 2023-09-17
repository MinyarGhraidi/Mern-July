const authorsControllers = require("../controllers/authors.controllers")

module.exports = (app) => {
    app.get("/api/authors", authorsControllers.findALLAuthors)
    app.post("/api/authors", authorsControllers.makeAuthors)
    app.get("/api/authors/:id", authorsControllers.findOneAuthors)
    app.put("/api/authors/:id", authorsControllers.updateOneAuthors)
    app.delete("/api/authors/:id", authorsControllers.deleteAuthors)
}

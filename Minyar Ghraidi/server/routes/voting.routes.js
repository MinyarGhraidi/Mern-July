const votingControllers = require("../controllers/voting.controllers")

module.exports = (app) => {
    app.get("/api/voting", votingControllers.findALLVoting)
    app.post("/api/voting", votingControllers.makeVoting)
    app.get("/api/voting/:id", votingControllers.findOneVoting)
    app.put("/api/voting/:id", votingControllers.updateOneVoting)
    app.delete("/api/voting/:id", votingControllers.deleteVoting)
}
const JokesControllers= require("../controllers/jokes.controllers")
console.log(JokesControllers)



module.exports =(app) =>{
    app.get("/api/Jokes",JokesControllers.findAllJokes)
}
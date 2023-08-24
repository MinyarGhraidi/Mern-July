const FactureControllers= require("../controllers/Facture.controller")
console.log(FactureControllers)



module.exports =(app) =>{
    app.get("/api/Facture",FactureControllers.findAllFacture)
}
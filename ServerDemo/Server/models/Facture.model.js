const mongoose = require("mongoose")



const FactureSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:[ true, "the FirstName is required"]

    },
    LastName:{
        type:String,
        required:[ true, "the LastName is required"]
},
Somme:{
    type:Number,
    required:[ true, "the Somme is required"]

},

},{timestamps:true});
module.exports.Facture = mongoose.model("Facture",FactureSchema) 
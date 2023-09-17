
const mongoose =require ("mongoose") 
const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 }
}, { timestamps: true });

module.exports = mongoose.model("Authors", AuthorSchema)

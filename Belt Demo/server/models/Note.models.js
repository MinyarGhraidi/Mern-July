const mongoose =require ("mongoose") 

const NoteSchema = new mongoose.Schema({

    Title: {
        type: String,
        required: [true, "Title Name is required"],

    },
    Content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [10, "Note Name must be at least 10 characters long"]
    },
    IsImportant: {
        type: Boolean,
        default: "false"

    },

}, { timestamps: true });


module.exports = mongoose.model("Note", NoteSchema)
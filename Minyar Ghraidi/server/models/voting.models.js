const mongoose =require ("mongoose") 

const votingSchema = new mongoose.Schema({

    YourQuestion: {
        type: String,
        required: [true, "    YourQuestion is required"],
        minlength: [10, "   YourQuestion your question must be at least 10 characters long"]
    },
    Option1: {
        type: String,
        required: [true, " Option1 is required"],

    },
    Option2: {
        type: String,
        required: [true, " Option2 is required"],

    },
    Option3: {
        type: String,
     

    },
    Option4: {
        type: String,
   

    },
    

}, { timestamps: true });


module.exports = mongoose.model("voting", votingSchema)
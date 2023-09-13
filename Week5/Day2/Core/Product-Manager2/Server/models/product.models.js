const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema({

    Title:{
        type:String,
        required:[true,"the product name is required"]
    },
    Price:{
        type:Number,
        required:[true,"the price is required"]
    }, 
    Description:{
        type:String,
        required:[true,"the Description is required"]
    },
},{timestamp:true});


module.exports = mongoose.model("Product",ProductSchema)


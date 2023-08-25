const express = require ("express")
const app = express ()



// -----MIDDLEWARE-----//
app.use(express.json(),express.urlencoded({extended:true}))

// to load .env variables
require("dotenv").config()
require("./config/mongoose.config")


const port = process.env.PORT
  


app.listen(port,()=>{
console.log(`>>>>>Server is running on Port ${port}`)
})




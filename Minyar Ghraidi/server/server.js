const express = require("express")
const cors = require("cors")
const app = express()





// --- MIDDLEWARE --
app.use(cors(), express.json(), express.urlencoded({ extended: true }))



require("dotenv").config()
require("./config/mongoose.config")
require("./routes/voting.routes")(app)




const port = process.env.PORT

app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ✨🎇 ${port}🎇✨  `)
})




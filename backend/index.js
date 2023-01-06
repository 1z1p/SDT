const express = require("express")
const cors = require("cors")
const router = require("./routers/router")

const PORT = process.env.PORT || 3001
const HOST = 'localhost'
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", router)

app.listen(PORT, HOST, () => {
    console.log("server started on port: " + PORT)
})
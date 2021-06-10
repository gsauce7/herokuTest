const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 9000
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/api", (_, res) => {
    res.json({ data: "The API is serving data!!!" })
})
app.listen(port, () => {
    console.log(`the server is up on port ${port}`)
})

console.log("It's alive!")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER) // mac is USER
console.log(process.env.PORT)
console.log(process.env.REALLY)
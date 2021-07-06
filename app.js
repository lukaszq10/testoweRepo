const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Test</h1>")
})

app.get("/new", (req, res) => {
    res.send("<h1>new</h1>")
})

app.listen(3000, () => {
    console.log("serwer")
})
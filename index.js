const express = require("express")
const path = require("path")
const ejs = require("ejs")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => 
    console.log("connection to database established")
).catch(err => {
    console.log(`db error ${err.message}`)
})


const app = new express()
app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/post", (req, res) => {
    res.render("post")
})

app.listen(4000, () => {
    console.log("App listening on port 4000")
})
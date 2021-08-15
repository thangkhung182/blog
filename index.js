const express = require("express")
const path = require("path")
const ejs = require("ejs")
const BlogPost = require("./models/BlogPost")

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

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", async (req, res) => {
    const blogposts = await BlogPost.find({})
    res.render("home", {
        blogposts: blogposts
    })
    //res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

// app.get("/post", (req, res) => {
//     res.render("post")
// })

app.get("/post/:id", async (req, res) => {
    console.log(req.params.id)
    const blogpost = await BlogPost.findById(req.params.id)
    res.render("post", {
        blogpost
    })
})

app.get("/posts/new", (req, res) => {
    res.render("create")
})

app.post("/posts/store", async (req, res) => {
    await BlogPost.create(req.body)
    res.redirect("/")
})

app.listen(4000, () => {
    console.log("App listening on port 4000")
})
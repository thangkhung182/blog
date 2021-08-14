const mongoose = require("mongoose")
const BlogPost = require("./models/BlogPost")

mongoose.connect("mongodb://localhost/blog", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => 
    console.log("connection to database established")
).catch(err => {
    console.log(`db error ${err.message}`)
})

BlogPost.create({
    title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topic: "
}, (error, blogpost) => {
    console.log(error,blogpost)
})
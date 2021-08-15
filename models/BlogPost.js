const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    image: String,
    createdOn: {
        type: Date,
        default: new Date()
    }
})

const BlogPost = mongoose.model("BlogPost", BlogPostSchema)

module.exports = BlogPost
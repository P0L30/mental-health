import mongoose from "mongoose"

const replySchema = new mongoose.Schema({
    likes: Number,
    description: String,
    owner: String    
})

const commentSchema = new mongoose.Schema({
    likes: Number,
    description: String,
    owner: String,
    replys: [ replySchema]
})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
   },
   comments: [ commentSchema],
   tags: [String]
   
});

export const postModel = mongoose.model("Post", postSchema)
export const replyModel = mongoose.model("Reply", replySchemas)

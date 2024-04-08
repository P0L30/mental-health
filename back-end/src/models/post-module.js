import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
   },
   comments: [{
    likes: Number,
    description: String,
    owner: String,
    replys: [{
        likes: Number,
        description: String,
        owner: String
    }]
   }],
   tags: [String]
   
});

export const postModel = mongoose.model("Post", postSchema)


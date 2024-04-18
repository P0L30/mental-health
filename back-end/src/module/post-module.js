import mongoose, { Schema } from "mongoose";

const replySchema = new Schema({
    likes: Number,
    description: String,
    owner: String
})

const commentSchema = new Schema({
    likes: Number,
    description: String,
    owner: String,
    replys: [{ type: Schema.Types.ObjectId, ref: 'Reply' }]
})

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    tags: [String]
});

export const postModel = mongoose.model("Post", postSchema)
export const commentModel = mongoose.model("Comment", commentSchema)
export const replyModel = mongoose.model("Reply", replySchema)


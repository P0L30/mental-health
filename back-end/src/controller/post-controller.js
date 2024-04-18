import { postModel, commentModel, replyModel } from "../module/post-module.js";


export const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find().populate({
            path: 'comments',
            populate: { path: 'replys' }
        })
        res.status(200).json({ Post: posts, message: "Succeed" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description, tags, comments } = req.body;
        const post = await postModel.create({ title, description, tags, comments })

        // await post.populate({
        //     path: "comments",
        //     populate: { path: 'replys ' }
        // })

        res.status(200).json({ message: "success", post: post })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id).populate({
            path: "comments",
            populate: { path: "replys" }
        })

        res.status(200).json({ message: "success", data: post })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await postModel.findByIdAndDelete(req.params.id)

        if (!post) {
            res.status(401).json({ success: false, error: "Post not found" })
        }

        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.sttus(500).json({ success: false, message: err.message })
    }
}


export const addComment = async (req, res) => {
    try {
        const { replys, likes, description, owner } = req.body
        const commentData = await commentModel.create({replys, likes, description, owner })
        const data = await postModel.findByIdAndUpdate(req.params.id, { $push: { comments: commentData._id } })

        res.status(200).json({ success: true, data: data })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const addReply = async (req, res) => {
    try {
        const { likes, description, owner } =req.body
        const replyData = await replyModel.create({ owner, likes, description })
        const data = await commentModel.findByIdAndUpdate(req.params.id, { $push: {replys: replyData._id}})

        res.status(200).json({ success: true, data: data })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params.id
        const data = await postModel.findByIdAndUpdate(req.params.id, { $pull: { comments: commentId } })

        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err.message })
    }
}

export const deleteReply = async (req, res) => {
    try {
        const { replyId } = req.body  
        const data = await commentModel.findByIdAndUpdate(req.params.id, { $pull: { replys: replyId } })

        res.status(200).json({ success: true, data: data })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const searchPost = async (req, res) => {
    try {
        const { title } = req.params.id
        const data = await postModel.findOne({ title });
        res.status(200).json({ success: true, data: data })
    } catch (err) {
        res.status(500).json({ success: false, message: err, message })
    }
}

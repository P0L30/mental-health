import { postModel } from "../models/post-module.js";


export const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find()
        res.status(200).json({ Post: posts, message: "Succeed" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description, comments, tags } = req.body;
        const post = await postModel.create({ title, description, comments, tags });
        res.status(200).json({ message: "success", post: post })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }
        res.status(200).json({ message: "success", data: post })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { comments } = req.body;
        const post =await postModel.findByIdAndUpdate(req.params.id, { comments })
        if(!post) {
            res.status(404).json({success: false, message: "Post not found"})
        }
        res.status(200).json({ success: true, data: post })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}


export const deletePost = async (req, res) => {
    try {
        const post = postModel.findByIdAndDelete(req.params.id)
        if (!post) {
            res.status(401).json({ success: false, error: "Post not found" })
        }
        res.status(200).json({ success: true, data: {} })
    } catch (err) {
        res.sttus(500).json({ success: false, message: err.message })
    }
}


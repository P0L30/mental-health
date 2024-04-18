import express from "express";
import { getAllPosts, createPost, getPost, deletePost, deleteComment, addComment, addReply, deleteReply, searchPost  } from "../controller/post-controller.js";

export const postRouter = express.Router()



postRouter.post("/createPost", createPost)
postRouter.get("/getPost/", getAllPosts)
postRouter.get("/getPost/:id", getPost)
postRouter.delete("/id", deletePost)
postRouter.get("/searchPost/:title", searchPost)
postRouter.post('/updateComment/:id', addComment)
postRouter.post('/updateReply/:id', addReply)
postRouter.post('/deleteReply/:id', deleteReply)
postRouter.post('/deleteComment/:id', deleteComment)

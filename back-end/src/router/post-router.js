import express from "express";
import { getAllPosts, createPost, getPost, updatePost, deletePost } from "../controller/post-controller.js";

export const postRouter = express.Router()


postRouter.get("/getPost/", getAllPosts)
postRouter.get("/getPost/:id", getPost)
postRouter.post("/createPost/", createPost)
postRouter.put("/updatePost/:id", updatePost)
postRouter.delete("/id", deletePost)
import express from "express";
import { getAllPosts, createPost, getPost, updatePost, deletePost } from "../controller/post-controller.js";

export const postRouter = express.Router()


postRouter.get("/", getAllPosts)
postRouter.get("/:id", getPost)
postRouter.post("/", createPost)
postRouter.put("/:id", updatePost)
postRouter.delete("/id", deletePost)
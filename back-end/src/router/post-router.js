import express from "express";
import { getAllPosts, createPost, getPost, updatePost, deletePost, updateReply } from "../controller/post-controller.js";

export const postRouter = express.Router()


postRouter.get("/", getAllPosts)
postRouter.get("/:id", getPost)
postRouter.post("/", createPost)
postRouter.delete("/:id", deletePost)

postRouter.put("/:id", updatePost)
// postRouter.put("/reply/:id", updateReply)
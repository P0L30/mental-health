// user-router
import express from "express";
import { createUser, getAllUsers, getUser } from "../controller/user-controller.js";
import { login } from "../controller/login-controller.js";
import { verifyToken } from "../middleware/auth.js"

export const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.post('/login', login);
userRouter.get('/users', verifyToken, getAllUsers);
userRouter.get('/user/:id', verifyToken, getUser);
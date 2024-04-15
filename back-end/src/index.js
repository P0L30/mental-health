import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "../src/router/user-router.js";
import { itemRouter } from "./router/itemRouter.js";
import { postRouter } from "./router/post-router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(itemRouter);
app.use(postRouter)

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://Poleo:bigdog825@cluster0.hkwpdie.mongodb.net/user-crud', {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDb();

app.listen(5000, () => {
  console.log(`Your server running on: http://localhost:5000`);
});

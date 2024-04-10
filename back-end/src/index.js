import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "../src/router/user-router.js";
import { itemRouter } from "./router/itemRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(itemRouter)

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://Poleo:bigdog825@cluster0.hkwpdie.mongodb.net/user-crud', {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDb();

// Route to delete a quiz by ID
app.delete('/quizzes/:quizId', async (req, res) => {
  try {
    const quizId = req.params.quizId;

    // Validate if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      return res.status(400).json({ message: 'Invalid Quiz ID' });
    }

    // Use mongoose to find the quiz by ID and remove it
    const result = await mongoose.model('Quiz').findByIdAndRemove(quizId);

    if (!result) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    return res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(5000, () => {
  console.log(`Your server running on: http://localhost:5000`);
});

import express from "express" 
import { addItem } from "../controller/itemController.js";

export const itemRouter = express.Router();

itemRouter.post('/item', addItem);


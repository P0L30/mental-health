import { addItem } from '../controller/itemController.js';
import logger from '../middleware/logger';
import connectDB from '../middleware/connectDB';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await addItem(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default connectDB(logger(handler));
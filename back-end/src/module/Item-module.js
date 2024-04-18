import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;
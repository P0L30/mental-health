import Item from '../module/Item.js';

export const addItem = async (req, res) => {
  const { title, description, solution, imageUrl } = req.body;
  console.log(title, description, solution, imageUrl)

  if (!title || !description || !solution || !imageUrl ) {
    return res.status(400).json({ message: "Title, description, and imageUrl are required" });
  }

  try {
    const newItem = {
      title: title,
      description: description,
      solution: solution,
      imageUrl: imageUrl,
    };

    const createdItem = await Item.create(newItem);

    res.status(201).json({ message: "Item created successfully", item: createdItem });
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

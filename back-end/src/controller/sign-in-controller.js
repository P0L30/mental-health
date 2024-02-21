import { users } from "./user-controller.js";

export const signIn = (req, res) => {
  const body = req.body;

  if (!body.email || !body.password || !body.username) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  const existingUser = users.find((user) => user.email === body.email || user.username === body.username);

  if (!existingUser) {
    const newUser = {
      email: body.email,
      username: body.username,
      password: body.password,
    };

    users.push(newUser);

    res.status(201).json({ message: "User created successfully", user: users });
    return;
  }

  res.status(409).json({ error: "User already exists" });
};

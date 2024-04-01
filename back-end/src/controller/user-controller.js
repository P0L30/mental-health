import { UserModel } from "../modules/user-module.js";
import bcrypt from "bcrypt";

export const users = [
  {
    "id": "adjhgafkjhg",
    "name": "Poleo",
    "email": "batod@gmail.com",
    "password": "adada"
  }
];

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data })
}

export const getUser = (req, res) => {
  const params = req.params;
  const filteredUser = users.filter((cur) => cur.id === params.id);
  if (filteredUser.length === 0) {
    res.status(405).json({ message: "User was not found" });
  } else {
    res.status(200).json({ user: filteredUser[0] });
  }
}

export const signIn = async (req, res) => {
  const body = req.body;
  console.log(body)
  if (!body.email || !body.password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  try {
    const existingUser = await UserModel.findOne({
      $or: [{ email: body.email }, { username: body.username }],
    });

    if (!existingUser) {
      const newUser = {
        email: body.email,
        password: body.password,
      };

      await UserModel.create(newUser);

      res.status(201).json({ message: "User created successfully", user: newUser });
    } else {
      res.status(409).json({ error: "User already exists" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const createUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      createdOn: new Date(),
      password: hashedPassword,
    };

    await UserModel.create(newUser);

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


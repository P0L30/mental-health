// login-controller
import { UserModel } from "../modules/user-module.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            return res.status(200).json({ user });
        } else {
            return res.status(401).json({ message: "Incorrect email or password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
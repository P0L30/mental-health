import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        required: true,
        type: String
    },
    email: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        unique: true,
        required: true,
        type: String
    }
})

export const UserModel = mongoose.model("user", userSchema)
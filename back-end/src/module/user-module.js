// user-module
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    password:String,
    name: { type: String, unique: true },
    createdOn: Date,
}, { collection: "user" });

export const UserModel = mongoose.model("User", userSchema);
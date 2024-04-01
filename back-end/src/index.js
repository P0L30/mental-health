'use client'
import express from "express"
import mongoose from "mongoose"
import { postRouter } from "./router/post-router.js"



const app = express()


const PORT = 5000
app.use(postRouter)


mongoose.connect("mongodb+srv://Poleo:bigdog825@cluster0.hkwpdie.mongodb.net/user-crud").then(() => { console.log("Mongodb connected")}).catch(err => { console.error("mongodb connection error", err); process.exit(1)})


app.listen(PORT, () => {
    console.log(`server is running on post ${PORT}`)
})
'use client'
import { useState } from "react";
import axios from "axios";
import style from "./post.module.css";
import Header from "../Header/page";
import { comment } from "postcss";
import { useRouter } from "next/navigation";

export default function Post() {
    const myData = ["Depression", "Anxiety disorder", "Schizophrenia", "Eating disorder", "PTSD", "Autism", "ADHD", "Insomnia", "Bipolar Disorder"];

    const [post, setPost] = useState({
        title: "", description: "", tags: [], comments: [
            {
                likes: 0,
                date: new Date(),
                description: "",
                ownwer: "",
                replys: [{
                    likes: 0,
                    description: "",
                    ownwer: "",
                }]
            }
        ]
    });
    const [comValue, setComValue] = useState("");
    const [postArray, setPostArray] = useState([]);
    const router = useRouter()

    const handleTitle = (e) => {
        setPost((prev) => ({ ...prev, title: e.target.value }));
    }

    const handleDescription = (e) => {
        setPost((prev) => ({ ...prev, description: e.target.value }));
    }
    const handlePost = async () => {
        if (post.title === "" || post.description === "") {
            alert("Invalid title or description");
        } else {
            const { data } = await axios.post("http://localhost:5000/createPost", {
                comments: post.comments,
                title: post.title,
                description: post.description,
                tags: post.tags
            })
            alert("Success!");
            router.push("/blog")

        }
    }

    // const handleComment = (index) => {
    //     const updatedPosts = [...postArray];
    //     updatedPosts[index].comments.push(comValue);
    //     setPostArray(updatedPosts);
    //     setComValue("");
    //     console.log(postArray);
    // }

    const giveTags = (e) => {
        const isTrue =  myData.includes(e.target.value)
        if (!isTrue) {
            setPost((prev) => ({ ...prev, tags: [...(prev.tags ?? []), e.target.value] }));
        }
    }

    console.log(post.tags)
    return (
        <div className={style.body}>
            <Header />

            <div className={style.post}>
                <div className={style.greenBackground}>
                    <img src="coolDoctor.png" className={style.size} alt="Profile" />
                    <input onChange={handleTitle} className={style.postText} placeholder="Write your title here!" value={post.title} />
                </div>
                <select className={style.postSelect} onChange={giveTags}>
                    <option>select</option>
                    {myData.map((text, index) => (
                        <option key={index}>{text}</option>
                    ))}
                </select>
                <input onChange={handleDescription} className={style.postTexts} placeholder="Write your description here!" value={post.description} />
                <div className={style.box}>
                    <button className={style.postButton} onClick={handlePost}>Publish</button>
                </div>

                {postArray.map((text, index) => (
                    <div className="post-map" style={{ padding: 20, border: "1px solid blue" }} key={index}>
                        <div className="user-section">
                            <img src="" alt="Profile" />
                            <div className="username-section">
                                <div className="username">John Walker</div>
                                <div className="tag-title">Tags:</div>
                                {text.tags.map((tag, idx) => (
                                    <p key={idx} style={{ color: "black", background: "white", paddingRight: 20 }}>{tag}</p>
                                ))}
                            </div>
                            <p className="time">17 hours ago</p>
                        </div>
                        <div className="desc-section">
                            <div className="title">{text.title}</div>
                            <div className="desc">{text.description}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                            <button className="btn">Like</button>
                            <button className="btn">Comment</button>
                            <button className="btn">Share</button>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                            <img />
                            <input onChange={(e) => setComValue(e.target.value)} placeholder="Write an answer!!" style={{ color: "black" }} value={comValue} />
                            <button onClick={() => handleComment(index)}>Post comment</button>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {text.comments.map((comment, idx) => (
                                <div key={idx} style={{ marginLeft: "2rem" }}>
                                    {comment}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

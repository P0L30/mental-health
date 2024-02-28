'use client'

import Image from "next/image";
import { useState } from "react";

export default function Postsections() {
  const btns = [{
    illness: "Deppression"
  }, { illness: "PTSD" }, { illness: "ADHD" }, { illness: "Split-personality disorder" }];

  const [post, setPost] = useState({ title: "", description: "" })
  const [postArray, setPostArray ] = useState([])


  function handleTitle(e) {
    setPost((prev) => ({ ...prev, title: e.target.value }))
  }


  function handleDescription(e) {
    setPost((prev) => ({ ...prev, description: e.target.value }))
  }

  function handleDelete() {
    setDesc("")
    setTitle("")
  }

  function handlePost() {
    postArray.push(post)
    alert("success")
  }
  console.log(postArray)

  console.log(post)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="post-section">
        <div className="user-section">
          <img src="" />
          <div className="username-section">
            <p className="username">John Walker</p>
            <p className="tag-title">Tags:</p>
            {/* <div className="tags">
           
  </div> */} </div>
          <p className="time">17 hours ago</p>
        </div>
        <div className="desc-section" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <select>
            {btns.map((text) => {
              return (
                <option>{text.illness}</option>
              )
            })}
          </select>
          <input onChange={handleTitle} className="title" placeholder="Write your title here!" value={post.title} style={{ color: "black" }} />
          <input onChange={handleDescription} className="desc" placeholder="Write your description here!" value={post.description} style={{ color: " black", }} />
        </div>

        <div className="button-section">
          <button className="btn" onClick={handleDelete}>Delete Post</button>
          <button className="btn" onClick={handlePost} style={{ marginLeft: 20 }}>Post</button>

        </div>

        <div className="post-map">
          {postArray.map((text, index) => {
            return (
              <div className="post-map">
              <div className="user-section">
                <img src="" />
                <div className="username-section">
                  <p className="username">John Walker</p>
                  <p className="tag-title">Tags:</p>
                  <div className="tags">
                    {btns.map((text) => {
                      return (
                        <button>{text.illness}</button>
                      )
                    })}
                  </div>
                </div>
                <p className="time">17 hours ago</p>
              </div>
              <div className="desc-section">
                <div className="title">{text[index].title}</div>
                <div className="desc">{text[index].description}</div>
              </div>
      
              <button className="btn" onClick={likePost}>Like</button>
              <button className="btn" onClick={postComment}>Comment</button>
              <button className="btn" onClick={sharePost}>Share</button>
              <button className="btn" onClick={savePost}>Save</button>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
}
export function PostMaking() {

  return (
    <main className="main-container">
      <div className="post-section">
        
      </div>
    </main>
  )
}


'use client'

import Image from "next/image";
import { useState } from "react";

export default function Postsections() {
  const btns = [{
    illness: "Deppression"
  }, { illness: "PTSD" }, { illness: "ADHD" }, { illness: "Split-personality disorder" }];

  const [post, setPost] = useState({})
  const [postArray, setPostArray] = useState([])


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
    if(post.title=="" || post.description =="") {
      alert("Invalid title or description")
    } else {
      setPostArray(prev => ([...prev, post]))
      alert("success")
      console.log(postArray)

    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="post-section">
        <div className="user-section">
          <img src="" />
          <div className="username-section">
            <p className="username">John Walker</p>
            <p className="tag-title">Tags:</p>
          </div>
          <p className="time">17 hours ago</p>
        </div>
        <div className="desc-section" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <select style={{ color: "black" }}>
            {btns.map((text) => {
              return (
                <option style={{ color: "black" }}>{text.illness}</option>
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

        <div className="post-map" style={{ border: 1, border: "white", border: "solid", padding: 10, display: "flex", flexDirection: "column", gap: 10 }}>
          {postArray.map((text) => {
            return (
              <div className="post-map" style={{ padding: 20, border: 1 , border: "blue", border: "solid"}}>
                <div className="user-section">
                  <img src="" />
                  <div className="username-section">
                    <p className="username">John Walker</p>
                    <p className="tag-title">Tags:</p>
                    <div className="tags">
                      {btns.map((text) => {
                        return (
                          <button style={{ marginRight: 10}}>{text.illness}</button>
                        )
                      })}
                    </div>
                  </div>
                  <p className="time">17 hours ago</p>
                </div>
                <div className="desc-section">
                  <div className="title">{text.title}</div>
                  <div className="desc">{text.description}</div>
                </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: 20}}>
                <button className="btn">Like</button>
                <button className="btn">Comment</button>
                <button className="btn">Share</button>
                <button className="btn">Save</button>

                    </div>
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


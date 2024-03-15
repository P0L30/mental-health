'use client'

import Image from "next/image";
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
export default function Postsections() {
  const myData = ["More...", "Deppression", "Anxiety disorder", "Schizophrenia", "Eating disorder", "PTSD", "Autism", "ADHD", "Insomnia", "Bipolar Disorder"]
  const router = useRouter()
  const [com, setCom] = useState("")
  const [post, setPost] = useState({})
  const [postArray, setPostArray] = useState([])
  function handleTitle(e) {
    setPost((prev) => ({ ...prev, title: e.target.value }))
  }

  function handleDescription(e) {
    setPost((prev) => ({ ...prev, description: e.target.value }))
  }
  function returnComment(e) {
    setCom(e.target.value)
  }

  function handleDelete() {
    if (post.title == "" && post.description == "") {
      alert("Invalid title and description")
    } else {
      if (confirm("Are you sure about deleting?")) {
        setPost(post.title())
      }
    }
  }

  function handlePost() {
    if (post.title == "" || post.description == "") {
      alert("Invalid title or description")
    } else {
      setPostArray(prev => ([...prev, { ...post, comments: [],}]))
      alert("success")
      console.log(postArray)

    }
  }

  function handleComment(index) {
    alert("success")
    postArray[index].comments.push(com)
    setCom("")
    console.log(postArray)
  }

  function seeType(e) {
    console.log(e.target.value)
    setPost((prev) => ({ ...prev, tags: [...(prev.tags ?? []), e.target.value] }))
    console.log(post.tags)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="post-section">
        <div className="user-section">
          <img src="" />
          <button onClick={() => { router.push('https://www.youtube.com/watch?v=LzkTbS2PXNM&rco=1') }}>Click me!</button>
          <div className="username-section">
            <p className="username" style={{ marginTop: 10 }}>John Walker</p>
            <div style={{ display: "flex", flexDirection: "row", gap: 20, marginTop: 10 }}>
              <p>Tags:</p>
              <select style={{ color: "black" }} onChange={seeType} >
                {myData.map((text) => {
                  return (
                    <option>{text}</option>
                  )
                })}
              </select>
              <p className="time">17 hours ago</p>

            </div>
          </div>

        </div>
        <div className="desc-section" style={{ display: "flex", flexDirection: "row", gap: "20px", marginTop: 10 }}>
          <input onChange={handleTitle} className="title" placeholder="Write your title here!" value={post.title} style={{ color: "black", height: 30, width: 250 }} />
          <input onChange={handleDescription} className="desc" placeholder="Write your description here!" value={post.description} style={{ color: " black", width: 250 }} />
        </div>

        <div style={{ marginTop: 10 }} className="button-section">
          <button className="btn" onClick={handleDelete}>Delete Post</button>
          <button className="btn" onClick={handlePost} style={{ marginLeft: 20 }}>Post</button>

        </div>

        <div className="post-map" style={{ border: 1, border: "white", border: "solid", padding: 10, display: "flex", flexDirection: "column", gap: 10, marginTop: 50 }}>
          {postArray.map((text, index) => {

            return (
              <div className="post-map" style={{ padding: 20, border: 1, border: "blue", border: "solid" }}>
                <div className="user-section">
                  <img src="" />
                  <div className="username-section">
                    <p className="username">John Walker</p>
                    <p className="tag-title">Tags:</p>
                    {postArray.map((text) => {
                      return (
                        <p style={{ color: "black", background: "white", paddingRight: 20 }}>{text.tags}</p>
                      )
                    })}
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
                  <input onChange={returnComment} placeholder="Write an answer!!" style={{ color: "black" }} value={com} />
                  <button onClick={() => handleComment(index)}>post comment</button>
                </div>
                <div style={{ display: "flex", flexDirection: "columm", gap: 20 }}>
                  {postArray.map((text) => {
                    return (
                      <p style={{ marginLeft: "2rem" }}>
                        {text.comments}
                      </p>
                    )
                  })}
                </div>
                <div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </main>
  );
}
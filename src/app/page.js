'use client'

import Image from "next/image";
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation";
export default function Postsections() {
  const myData = [
    "More...",
    "Deppression",
    "Anxiety disorder",
    "Schizophrenia",
    "Eating disorder",
    "PTSD",
    "Autism",
    "ADHD",
    "Insomnia",
    "Bipolar Disorder"
  ]
  const router = useRouter()
  const [com, setCom] = useState("")
  const [post, setPost] = useState({})
  const [postArray, setPostArray] = useState([])
  const [herData, setHerData] = useState([])
  function handleTitle(e) {
    setPost((prev) => ({ ...prev, title: e.target.value }))
  }

  function handleDescription(e) {
    setPost((prev) => ({ ...prev, description: e.target.value }))
  }

  function handleDelete() {
    if (post.title == "" && post.description == "") {

    } else {
      if (confirm("Are you sure about deleting?")) {
        setTitle("")
        setDesc("")
      }

    }
  }

  function handlePost() {
    if (post.title == "" || post.description == "") {
      alert("Invalid title or description")
    } else {
      setPostArray(prev => ([...prev, { ...post, comments: [], tags: [] }]))
      alert("success")
      console.log(postArray)

    }
  }

  function seeClick() {
    setIsClicked(true)
  }

  function addList(index) {
    console.log(index)
  }


  function handleComment(index) {
    alert("success")
    postArray[index].comments.push(com)
    setCom("")

  }
  function returnComment(e) {
    setCom(e.target.value)
  }

  function searchNavbar(e) {
    myData.filter((prev) => prev)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="post-section">
        <div className="user-section">
          <img src="" />
          <button onClick={() => { router.push('https://www.youtube.com/watch?v=eauWX_UQ8HE') }}>CLick me!</button>
          <div className="username-section">
            <p className="username">John Walker</p>
            <div className="tag-title">
              <p>Tags:</p>

              <select style={{ color: "black" }} onChange={(_, index) =>  addList(index) }>
                {myData.map((text, index) => {
                  return (
                    <option >{text}</option>
                  )
                })}
              </select>


            </div>
          </div>
          <p className="time">17 hours ago</p>
        </div>
        <div className="desc-section" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <select>
            {myData.map((test, index) => {
              return (
                <option className="option-select">a</option>
              )
            })}
          </select>
          <input onChange={handleTitle} className="title" placeholder="Write your title here!" value={post.title} style={{ color: "black" }} />
          <textarea onChange={handleDescription} className="desc" placeholder="Write your description here!" value={post.description} style={{ color: " black", }} />
        </div>

        <div className="button-section">
          <button className="btn" onClick={handleDelete}>Delete Post</button>
          <button className="btn" onClick={handlePost} style={{ marginLeft: 20 }}>Post</button>

        </div>

        <div className="post-map" style={{ border: 1, border: "white", border: "solid", padding: 10, display: "flex", flexDirection: "column", gap: 10 }}>
          {postArray.map((text, index) => {
            return (
              <div className="post-map" style={{ padding: 20, border: 1, border: "blue", border: "solid" }}>
                <div className="user-section">
                  <img src="" />
                  <div className="username-section">
                    <p className="username">John Walker</p>
                    <p className="tag-title">Tags:</p>
                    <div className="tags">
                      {myData.map((text) => {
                        return (
                          <button style={{ marginRight: 10 }}>{text.illness}</button>
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
                <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                  <button className="btn">Like</button>
                  <button className="btn">Comment</button>
                  <button className="btn">Share</button>
                  <button className="btn">Save</button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                  <img />
                  <input onChange={returnComment} placeholder="Write an answer!!" style={{ color: "black" }} value={com} />
                  <button onClick={() => handleComment(index)}>post comment</button>
                </div>
                <div>
                </div>
              </div>
            )
          })}
        </div>

        <input className="search-navbar" placeholder="Search here!" onChange={() => searchNavbar()} />

        <div>

          {herData.map((text) => {
            return (
              <button>{text}</button>
            )
          })}
          <button style={{ width: 100, height: 100, background: "white", color: "black" }}>PTSD</button>
          <button style={{ width: 100, height: 100, background: "white", color: "black" }}>Deppression</button>
          <button style={{ width: 100, height: 100, background: "white", color: "black" }}>Anxiety</button>
          <select style={{ color: "black" }}>
            {myData.map((text, index) => {
              return (
                <option onClick={() => addList(index)}>{text}</option>
              )
            })}
          </select>
        </div>
      </div>


    </main>
  );
}



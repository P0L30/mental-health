'use client'
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios"


export function Postsections({ searchParams }) {

  // searchParams.id
  const PostSection = (text) => {
    const [tagValue, setTagValue] = useState([])
    const [comValue, setComValue] = useState('')
    function handleIDK(e) {
      setComValue(e.target.value)
    }
    return (
      <div className="post-map" style={{ padding: 20, border: 1, border: "blue", border: "solid" }}>
        <div className="user-section">
          <img src="" />
          <div className="username-section">
            <div className="username">John Walker</div>
            <div className="tag-title">Tags:</div>
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
          <input onChange={handleIDK} placeholder="Write an answer!!" style={{ color: "black" }} value={comValue} />
          <button onclick={() => handleComment(index)}>post comment</button>
        </div>
        <div style={{ display: "flex", flexDirection: "columm", gap: 20 }}>
          {postArray.map((text) => {
            return (
              <div style={{ marginLeft: "2rem" }} >
                {text.comments}
              </div>
            )
          })}
        </div>
        <div>
        </div>
      </div>
    )
  }


  const myData = ["Deppression", "Anxiety disorder", "Schizophrenia", "Eating disorder", "PTSD", "Autism", "ADHD", "Insomnia", "Bipolar Disorder"]
  const router = useRouter()
  const [com, setCom] = useState("")
  const [post, setPost] = useState({ title: "", description: "", tags: [], comments: []})
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
      setPostArray(prev => ([...prev, { ...post, comments: [], }]))
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

  function giveTags(e) {
    if(e.target.value === tags) {
    }
    console.log(e.target.value)
    setPost((prev) => ({ ...prev, tags: [...(prev.tags ?? [""]), e.target.value] }))
    console.log(post.tags)
  }


  // router.push('/post'+'?id'+post._id)




  const { data } = axios.post('http://localhost:5000', {
    comments: postPrior.comments,
    title: postArray.title,
    description: postArray.description,
    tags: postArray.tags
  })



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
              <select style={{ color: "black" }} onChange={giveTags} >
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
          {postArray.map((text) => {
            return (
              <PostSection text={text} />
            )
          })}
        </div>

      </div>
    </main>
  );
}
export function Post() {
  const myData = ["Deppression", "Anxiety disorder", "Schizophrenia", "Eating disorder", "PTSD", "Autism", "ADHD", "Insomnia", "Bipolar Disorder"]
  const [postArray, setPostArray] = useState([])
  const [postPrior, setPostPrior] = useState({
    title: "", description: "",
    comments: {
      owner: "",
      likes: 0,
      commentDescription: "",
      replys: {
        owner: "",
        likes: 0,
        replyDescription: ""
      }
    },
    tags: []
  })
  const arr = Object.values(postPrior.tags ?? {})

  async function postCreate() {
    try {
      if (postPrior.title == "" || postPrior.description == "") {
        alert("Invalid title or description")
      } else {
        const { data } = await axios.post('http://localhost:5000', {
          title: postPrior.title,
          description: postPrior.description,
          comments: postPrior.comments,
          tags: postPrior.tags
        });
        console.log(data)
        alert("Success for creating a post!")
      }

    } catch (err) {
      console.log(err)
    }
  }

  function handlePostTitle(e) {
    setPostPrior((prev) => ({ ...prev, title: e.target.value }))
  }
  function handlePostDescription(e) {
    setPostPrior((prev) => ({ ...prev, description: e.target.value }))
  }
  function postDelete() {
    if (postPrior.title == "" && postPrior.description == "") {
      alert("There is nothing to delete you bigot!")
    } else {
      if (confirm("Are you sure about deleting? All progress is Deleted")) {
        setPostPrior((prev) => ({ ...prev, title: "", description: "", tags: [] }))
        alert("Success for deleting a post!")
      }
    }
  }
  function postGiveTags(e) {
    if (!postPrior.tags?.find((cur) => cur === e.target.value))
      setPostPrior((prev) => ({ ...prev, tags: [...(prev.tags ?? [""]), e.target.value] }))
  }

  function deleteTags(index) {
    console.log(arr[index])
  }
  console.log(postPrior.tags)
  console.log(arr)

  return (
    <main style={{ display: "flex", alignItems: "center", paddingTop: 30, flexDirection: "column", gap: 20 }}>
      <p style={{ fontSize: 45 }}>Post creating process please put css in it</p>
      <div className="desc-section" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: 10 }}>
        <input onChange={handlePostTitle} value={postPrior.title} className="title" placeholder="Title" style={{ color: "black", height: 50, width: 500, fontSize: 20, borderRadius: 10 }} />
        <input onChange={handlePostDescription} value={postPrior.description} className="description" placeholder="Description" style={{ color: "black", height: 100, width: 500, fontSize: 15, borderRadius: 10 }} />
      </div>
      <div className="tags-section">
        <select style={{ color: "black", height: 45 }} onChange={postGiveTags}>
          {myData.map((text) => {
            return <option>{text}</option>
          })}
        </select>

        <div className="tags-shown-sections" style={{ display: "flex", gap: 20, flexDirection: "row" }}>
          {arr.map((text, index) => {
            return (
              <button style={{ width: 200, height: 50, background: "blue", display: "flex", gap: 20 }} onClick={() => deleteTags(index)}>{text}</button>

            )
          })}
        </div>
      </div>
      <div className="button section" style={{ display: "flex", gap: 20 }}>
        <button onClick={postDelete} style={{ width: 250, height: 50, background: "white", color: "black", borderRadius: 10 }} className="delete-post">Delete post</button>
        <button onClick={postCreate} style={{ width: 250, height: 50, background: "white", color: "black", borderRadius: 10 }} className="submit-post">Submit post</button>
      </div>
    </main>
  )
}

export function GetPost() {
  const router = useRouter()
  const [post, setPost] = useState([{}])
  const url = useSearchParams()

  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost() {
    try {
      const response = await axios.get("http://localhost:5000/")

      setPost(response.data.Post)
      console.log(post)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <main style={{ display: "flex", alignItems: "center", paddingTop: 30, flexDirection: "column", gap: 20 }}>
      <div className="getPost-section">
        <p style={{ fontSize: 45 }}>Post creating process please put css in it</p>
        <div className="content" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {post.map((text, index) => {
            return (
              <div onClick={() => router.push("/singlePost" + "?=" + `${text._id}`)}>
                <div>
                  <div>
                    <img></img>
                    <div>coolDoctor</div>
                    <div>・3h ago</div>
                  </div>
                  <div>{text.title}</div>
                </div>
                <div>
                  {post.map((text) => {
                    return (
                      <p>{text.tags}</p>
                    )
                  })}
                </div>
                <div>{text.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  )
}
export default function getSinglePost({ searchParams }) {
  const [ post, setPost ] = useState({})
  const id = useSearchParams().get('_id')
  useEffect(() => {
     GetPostById()
     }, [])

  async function GetPostById() {
    const response = await axios.get(`http://localhost:5000/${id}`)
    setPost(response.data.data)
  }
  console.log(post)

  return (
    <main>
      <div className="fetch-section">
        get single post Please put css in it
      </div>

      <div>
        POst:
      </div>

      <div>
        <p>{post.title}</p>
        <p>{post.description}</p>
        <p></p>
      </div>
    </main>
  )
} 
  
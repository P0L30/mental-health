'use client'

import style from "./singleBlog.module.css"
import Header from "../Header/page"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SingleBlog({ searchParams }) {
    const [post, setPost] = useState({})
    const [ input, setInput ] = useState("") 
    const [ com, setCom ] = useState({
        description: "",
        likes: 0,
        owner: "",
        replys: []
        
    })
    const [ like, setLike ] = useState(999)
    const router = useRouter();
    const id = useSearchParams().get('id')


    async function fetchPost() {
        const response = await axios.get(`http://localhost:5000/getPost/${id}`)
        setPost(response.data.data)
    }

    async function returnUpdatedComment() {
        const { data } =await axios.put(`http://localhost:5000/updateComment/${id}`)
    }

    useEffect(() => {
        fetchPost();
        checkCount()
    }, []);

    function cancelComment() {
        setInput("")
    }
    async function sendComment() {
    }

    async function likeComment() {
        const { comments } = axios.get(`http://localhost:5000/getPost/${id}`);

        
    }

    function checkCount() {
        if(like > 999 ) {
            setLike((like/1000).toFixed(2))
        }
        
    }

    console.log(post)
    console.log(input)
    return (
        <div className={style.body}>
            <Header></Header>
            <div className={style.column}>
                <div
                    className={style.main}>
                    <div className={style.flexC}>
                        <img src="coolDoctor.png" className={style.size}></img>
                        <div>coolDoctor</div>
                        <div className={style.time}>・3h ago</div>
                    </div>

                    <div className={style.title}>{post.title}</div>

                    <div className={style.text}>{post.description}</div>

                    <div className={style.flexB}>
                        <button className={style.button} onClick={likeComment}>
                            <img src="healt.png" className={style.iconHealt} ></img>
                            {like}
                        </button>
                        <button className={style.button}>
                            <img src="comment.png" className={style.iconComment}></img>
                        </button>
                        <button className={style.button}>
                            <img src="share.png" className={style.iconShare}></img>
                            Share</button>
                    </div>
                </div>
                <div className={style.comment}>

                    <div className={style.commentFlex}>
                        <div className={style.flex}>
                            <img src="coolDoctor.png" className={style.coolDoctorImg}></img>
                            <div className={style.Name}>CoolDoctor</div>
                            <div className={style.time}>・2h ago</div>
                        </div>

                        <div className={style.commentText}>asdfljasjkfasfdaasdjasdjklffdsjfasddfsajklfdjdsajsajfksldijifuads fsifioasj dfi asdfijasopifjasidjfl;askfiopajsdfoisajdfsa askdfjjasjdfhahsbkfahskjdfhkabsdkjfakajshhjkfaso sadlkfaslfda s;as f ajfas dfkasfyshdfasi</div>

                        <div className={style.CommentflexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                Like
                            </button>
                            <button className={style.buttonShare}>
                                <img src="share.png" className={style.iconShare}></img>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
                    <div >
                        <img></img>
                        <div style={{ display: "flex", flexDirection: "row", gap: "20px"}}>
                        <input placeholder="Add a comment..." style={{ color: "black"}} onChange={(e) => setInput(e.target.value)}/>
                        <button style={{ color: "black"}} onClick={cancelComment}>Cancel</button>
                        <button style={{ color: "black"}} onClick={sendComment}>Confirm</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}


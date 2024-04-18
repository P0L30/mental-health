'use client'

import style from "./singleBlog.module.css"
import Header from "../Header/page"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SingleBlog({ searchParams }) {
    const [post, setPost] = useState({})
    const [ isClicked, setIsClicked ] = useState(false)
    const router = useRouter();
    const id = useSearchParams().get('id')

    async function fetchPost() {
        const response = await axios.get(`http://localhost:5000/getPost/${id}`)
        setPost(response.data.data)
    }

    useEffect(() => {
        fetchPost()
    }, [])
    console.log(post)
    return (
        <div className={style.body}>
            <Header></Header>
            <div className={style.column}>
                <div
                    className={style.main}>
                    <div className={style.flexC}>
                        <img src="coolDoctor.png" className={style.size}></img>
                        <div className={style.name}>CoolDoctor</div>
                        <div className={style.time}>・3h ago</div>
                    </div>

                    <div className={style.title}>{post.title}</div>

                    <div className={style.text}>{post.description}</div>

                    <div className={style.flexB}>
                        <button className={style.button}>
                            <div>
                            //     className="side"
                            //     style={{
                            //         backgroundColor: i + 1 === diceNumber ? "health.png" : "blackHealth",
                            //     }}
                                // {isClicked ? style={{ fill: "white"}} : style={{fill: "green"}}}

                            </div>
                            <img src="health.png" className={style.iconHealt} ></img>
                            Like
                        </button>
                        <button className={style.button}>
                            <img src="comment.png" className={style.iconComment}></img>
                            Comment
                        </button>
                        <button className={style.button}>
                            <img src="share.png" className={style.iconShare}></img>
                            Share</button>
                    </div>
                </div>

                {/* comment */}

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
                                <img src="health.png" className={style.iconHealt}></img>
                                Like
                            </button>
                            <button className={style.buttonShare}>
                                <img src="share.png" className={style.iconShare}></img>
                                Reply
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


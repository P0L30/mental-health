'use client'

import Link from "next/link";
import style from "./blog.module.css"
import { useEffect } from "react";
import Header from "../Header/page";


export default function blog() {

    return (
        <div className={style.body}>
            <Header></Header>

            <img src="body.png" className={style.bodyImg}></img>

            <div className={style.center}>
                <div className={style.search}>
                    <div className={style.searchBox}>
                        <input className={style.searchInput} type="text" placeholder="Search..." />
                        <button className={style.searchButton}>
                            <img src="search.png" className={style.searchImg}></img>
                        </button>
                    </div>
                    <div className={style.searchName}>
                        <p>
                            Practice relaxation<br />
                            Cognitive<br />
                            Regular exercise<br />
                            Limit caffeine
                        </p>
                    </div>
                </div>
                <div className={style.mid}>
                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>

                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>

                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>


                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>

                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>

                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>

                    <div className={style.main}>
                        <div className={style.flexC}>
                            <img src="coolDoctor.png" className={style.size}></img>
                            <div>coolDoctor</div>
                            <div className={style.time}>・3h ago</div>
                        </div>
                        <div className={style.text}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        <select className={style.select}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                        <div className={style.flexB}>
                            <button className={style.button}>
                                <img src="healt.png" className={style.iconHealt}></img>
                                62.3k</button>
                            <button className={style.button}>
                                <img src="comment.png" className={style.iconComment}></img>
                                3k</button>
                            <button className={style.button}>
                                <img src="share.png" className={style.iconShare}></img>
                                share</button>
                        </div>
                    </div>
                </div>

                {/* <div className={style.post}>
                    <div className={style.postMain}>
                        <div className={style.greenBackground}>
                            <div className={style.postFlexC}>
                                <img src="coolDoctor.png" className={style.size}></img>
                                <div>coolDoctor</div>
                                <div className={style.time}>・3h ago</div>
                            </div>
                            <div className={style.postText}>Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.</div>
                        </div>
                        <select className={style.postSelect}>
                            <option>select</option>
                            <option>asfs</option>
                            <option>dfghdfh</option>
                            <option>dfgh</option>
                        </select>
                        <div className={style.postTexts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                            In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                    </div>
                </div> */}
                <Link
                    href={"./post"}>
                    <button onMouseOver={() => console.log('hello')} onMouseOut={() => console.log('out')} className={style.postButton}>Create post</button>
                </Link>
                {/* { && <div>asdf</div>} */}
            </div>
        </div>
    )
}
import Link from "next/link";
import style from "./chat.module.css"
 
export default function Chat() {
    return (
        <div className={style.body}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src="logo.png" className="h-24 w-24"></img>
                    MHChat
                </div>
                <div className={style.flex}>
                    <div className={style.NameFlex}>
                        <Link
                            href={"./AboutUs"}>
                            <div className={style.PageName}>About Us</div>
                        </Link>
                        <Link
                            href={"./WhatToDo"}>
                            <div className={style.PageName}>What To Do</div>
                        </Link>
                        <Link
                            href={"./LearnAbout"}>
                            <div className={style.PageName}>Learn About</div>
                        </Link>
                        <Link
                            href={"./WhatTowatch"}>
                            <div className={style.PageName}>What To Watch</div>
                        </Link>
                        <Link
                            href={"./TalkTo"}>
                            <div className={style.PageName}>Talk To</div>
                        </Link>
                        <Link
                            href={"./Chat"}>
                            <div className={style.PageNameT}>Chat</div>
                        </Link>
                    </div>
                </div>
            </div>
 
            <div className={style.center}>
                <div className={style.search}>
                    <div className={style.searchBox}>
                        <input className={style.searchInput} type="text" placeholder="Search..." />
                        <button className={style.searchButton}>
                            <img src="search.png" className={style.searchImg}></img>
                        </button>
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
 
                <div className={style.post}>
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
                </div>
            </div>
        </div>
    )
}
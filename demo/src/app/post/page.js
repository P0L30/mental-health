import Link from "next/link"
import style from "./post.module.css"
import Header from "../Header/page"

export default function Post() {
    return (
        <div className={style.body}>
            <Header></Header>

            <div className={style.post}>
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
                    <option>a</option>
                    <option>dfghdfh</option>
                    <option>dfgh</option>
                </select>
                <div className={style.postTexts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.
                    In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                <div className={style.box}>
                    <button className={style.postButton}>Publish</button>
                </div>
            </div>
        </div>
    )
}
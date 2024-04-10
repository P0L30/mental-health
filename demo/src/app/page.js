import Link from "next/link";
import style from "./home.module.css"


export default function Home() {
  return (
    <div className={style.body}>
      <div className={style.greenback}></div>
      <div className={style.center}>
        
        <div className={style.header}>
          <div className={style.logo}>
            <img src="logo.png" className="h-24 w-24"></img>
            MHChat
          </div>
        </div>

        <div className={style.flex}>
          <div className={style.left}>
            <div className={style.column}>
              <div className={style.Name}>
                Welcome
              </div>
              <div className={style.bottomText}>To MHChat</div>
              <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
              <div className={style.flexButton}>
                <button className={style.button}>Sign Up</button>
                <Link
                  href={"./main"}>
                  <button className={style.egister}>Log in</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <img src="image.png" className={style.image}></img>
            <div className={style.O}></div>
            <img src="doligon.png" className={style.doligon}></img>
            <img src="tseg.png" className={style.tseg}></img>
            <img src="ugalz.png" className={style.ugalz}></img>
            <img src="tsagirag.png" className={style.tsagirag}></img>
            <img src="tseg.png" className={style.tseg1}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

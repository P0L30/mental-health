import style from "./home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className={style.body}>
      <div className={style.greenback}></div>
      <div className={style.center}>
        <div className={style.header}>
          <div className={style.logo}>
            <img src="logo.png" className="h-24 w-24"></img>
          </div>
          <div className={style.flex}>
            <div className={style.NameFlex}>
              <p style={{fontSize: "25px"}}>About Us</p>
              <p style={{fontSize: "25px"}}>What to do</p>
              <p style={{fontSize: "25px"}}>Like us</p>
              <p style={{fontSize: "25px"}}>Help</p>
            </div>
            <Link href="/login"><div className={style.egister}>Log in</div></Link>
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <div className={style.column}>
              <div className={style.Name}>
                Welcome 
              </div>
              <div className={style.bottomText}>to MHChat</div>
              <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
              <Link href="/signup"><div className={style.button}>Get Services</div></Link>
            </div>
          </div>
          <div className={style.right}>
            <img src="image.png" className={style.image}></img>
            <div className={style.O}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
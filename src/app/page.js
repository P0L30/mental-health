import style from "./home.module.css"

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
              <div>Home</div>
              <div>About Us</div>
              <div>Courses</div>
              <div>Pages</div>
              <div>Blog</div>
              <div>Contagt</div>
            </div>
            <div className={style.egister}>Log in</div>
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.left}>
            <div className={style.column}>
              <div className={style.Name}>
                Get Quick
              </div>
              <div className={style.bottomText}>Medical services</div>
              <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
              <div className={style.button}>Get Services</div>
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

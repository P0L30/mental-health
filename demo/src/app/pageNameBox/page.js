import style from "./pageNameBox.module.css"
import Link from "next/link";

export const PageNameBox = () => {
    return (
        <div className={style.body}>
                <div className={style.NameFlex}>
                    <Link
                        href={"./about"}>
                        <div className={style.PageName}>About Us</div>
                    </Link>
                    <Link
                        href={"./learn"}>
                        <div className={style.PageNameT}>Learn About</div>
                    </Link>
                    <Link
                        href={"./watch"}>
                        <div className={style.PageName}>What To Watch</div>
                    </Link>
                    <Link
                        href={"./talk"}>
                        <div className={style.PageName}>Talk To</div>
                    </Link>
                    <Link
                        href={"./blog"}>
                        <div className={style.PageName}>blog</div>
                    </Link>
                </div>
        </div>
    )
}
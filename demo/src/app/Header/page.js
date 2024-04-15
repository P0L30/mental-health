import style from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src="logo.png" className="h-20 w-20"></img>
                    MHChat
                </div>
                <div className={style.flex}>
                    <div className={style.NameFlex}>
                        <Link
                            href={"./about"}>
                            <div className={style.PageName}>About Us</div>
                        </Link>
                        <Link
                            href={"./learn"}>
                            <div className={style.PageName}>Learn About</div>
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

            </div>
        </div>
    );
}
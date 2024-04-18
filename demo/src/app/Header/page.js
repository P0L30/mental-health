"use client"

import style from "./header.module.css";
import Link from "next/link";

import { useRouter } from 'next/navigation'


//   return (
//     <button type="button" onClick={() => router.push('/about')}>
//       Click me
//     </button>
//   )

export default function Header() {

    const router = useRouter()

    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src="logo.png" className="h-20 w-20"></img>
                    MHChat
                </div>
                <div className={style.flex}>
                    <div className={style.NameFlex}>
                        <button type="button" onClick={() => router.push('/AboutUs')}>
                            <div className={style.PageName}>About Us</div>
                        </button>
                        <Link
                            href={"./LearnAbout"}>
                            <div className={style.PageName}>Learn About</div>
                        </Link>
                        <Link
                            href={"./WhatToWatch"}>
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
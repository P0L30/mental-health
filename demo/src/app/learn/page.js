"use client";

import { PageNameBox } from "../pageNameBox/page";
import { useState } from "react";

import style from "./learn.module.css"

import Header from "../Header/page";

export default function Learn() {

    const [showPageNameBox, setShowPageNameBox] = useState(false);

    const [phoneSize, setPhoneSize] = useState("950")


    if (typeof window !== 'undefined') {
        console.log('width', window.innerWidth);
        try {
            console.log('height', window.innerHeight);
        } catch (error) {
            console.error('Error accessing innerHeight:', error);
        }
    }
    // function logWindowSize() {
    //     if (setPhoneSize) {
    //         phoneSize, showPageNameBox + "hello" 
    //     }
    // }

    return (
        <div className={style.body}>
            <Header></Header>
            <div className={style.center}>
                <div className={style.column}>
                    <div className={style.searchBox}>
                        <input className={style.searchInput} type="text" placeholder="Search..." />
                        <button className={style.searchButton}>
                            <img src="search.png" className={style.searchImg}></img>
                        </button>
                    </div>
                    <div className={style.text}>
                        <div>- {"How To Use Icons In eLearning"}</div>
                        <div>- {"src/app/learn/learn.module.css"}</div>
                        <div>- {"Import trace for requested module"}</div>
                    </div>
                </div>
            </div>
            {showPageNameBox === true ? <PageNameBox /> : <></>}
        </div>
    )
}
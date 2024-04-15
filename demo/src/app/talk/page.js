'use client'

import style from "./talk.module.css"
import { useState } from "react";

import Header from "../Header/page";

export default function Talk() {

    if (typeof window !== 'undefined') {
        console.log('width', window.innerWidth);
        try {
            console.log('height', window.innerHeight);
        } catch (error) {
            console.error('Error accessing innerHeight:', error);
        }
    }
    
    return (
        <div className={style.body}>
                <Header></Header>
            <div className={style.columnBody}>
                <div className={style.box}>
                    <div className={style.column}>
                        <img src="womanDoctor.png" className={style.img}></img>
                        <div>Bolroo Emch</div>
                    </div>
                    <div className={style.TextColumn}>
                        <div className={style.text}>Text messages are used for personal, family, business, and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family, and colleagues, including in contexts where a call would be impolite or inappropriate</div>
                        <div className={style.flexx}>
                            <div className={style.numN}>Number :</div>
                            <div className={style.number}>81232302</div>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.column}>
                        <img src="indianDoctor.png" className={style.img}></img>
                        <div>Baldan Emch</div>
                    </div>
                    <div className={style.TextColumn}>
                        <div className={style.text}>Messages are used for personal, family, business, and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family, and colleagues, including in contexts where a call would be impolite or inappropriate</div>
                        <div className={style.flexx}>
                            <div className={style.numN}>Number :</div>
                            <div className={style.number}>84233310</div>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.column}>
                        <img src="coolDoctor.png" className={style.img}></img>
                        <div>Cool Emch</div>
                    </div>
                    <div className={style.TextColumn}>
                        <div className={style.text}>Used for personal, family, business, and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family, and colleagues, including in contexts where a call would be impolite or inappropriate</div>
                        <div className={style.flexx}>
                            <div className={style.numN}>Number :</div>
                            <div className={style.number}>84565657</div>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.column}>
                        <img src="harDoctor.png" className={style.img}></img>
                        <div>Galaa Emch</div>
                    </div>
                    <div className={style.TextColumn}>
                        <div className={style.text}>Social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family, and colleagues, including in contexts where a call would be impolite or inappropriate</div>
                        <div className={style.flexx}>
                            <div className={style.numN}>Number :</div>
                            <div className={style.number}>84252529</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
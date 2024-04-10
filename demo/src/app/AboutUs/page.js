import Link from "next/link"
import style from "./main.module.css"
import Image from 'next/image';
import vision from '../../../public/vision.png';
import mission from '../../../public/mission.png';
import buson from '../../../public/buson.png';
import me from '../../../public/me.png';
import dawaa from '../../../public/dawaa.png';
import enkhee from '../../../public/enkhee.png';

export default function Main() {
    return (
        <div className="bg-white" style={{height: "265vh"}}>
            <div className={style.body}>
                <div className={style.center}>
                    <div className={style.header}>
                        <div className={style.logo}>
                            <img src="logo.png" className="h-24 w-24"></img>
                            MHChat
                        </div>
                        <div className={style.flex}>
                            <div className={style.NameFlex}>
                                <Link
                                    href={"./AboutUS"}>
                                    <div className={style.PageName}>About Us</div>
                                </Link>
                                <Link
                                    href={"./LearnAbout"}>
                                    <div className={style.PageName}>Learn About</div>
                                </Link>
                                <Link
                                    href={"./WhatToWatch"}>
                                    <div className={style.PageName}>What To Watch</div>
                                </Link>
                                <Link
                                    href={"./TalkTo"}>
                                    <div className={style.PageName}>Talk To</div>
                                </Link>
                                <Link
                                    href={"./Help?"}>
                                    <div className={style.PageName}>Help ?</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.box}>
                        <div className={style.left}>
                            <img src="image.png" className={style.image}></img>
                            <div className={style.O}></div>
                            <img src="doligon.png" className={style.doligon}></img>
                            <img src="tseg.png" className={style.tseg}></img>
                            <img src="ugalz.png" className={style.ugalz}></img>
                            <img src="tsagirag.png" className={style.tsagirag}></img>
                            <img src="tseg.png" className={style.tseg1}></img>
                        </div>
                        <div className={style.right}>
                            <div className={style.column}>
                                <div className={style.bottomText}>About Us</div>
                                <div className={style.text}>Somethings about us you may want to know.</div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
            <div style={{width: "100vw", height: "400px",}} className="flex justify-center items-center flex-row gap-40">
                <div className="flex justify-center items-center flex-col gap-2">
                    <p style={{fontSize: "110px", fontFamily: "sans-serif"}} className="font-bold">Our Vision</p>
                    <p style={{fontSize: "20px", fontFamily: "sans-serif"}}>Our vision is for people learn and fix there mental problems.<br /> And seek out help from others who have the same problems <br /> and seek out a answer together</p>
                </div>
                <Image src={mission} width={500} height={500}/>
            </div>
            <div style={{width: "100vw", height: "400px", border: "solid", borderColor: "black", borderTopWidth: "2px"}} className="flex justify-center items-center flex-row gap-40">
            <Image src={vision} width={400} height={400}/>  
                <div>
                    <p style={{fontSize: "110px", fontFamily: "sans-serif"}} className="font-bold">Our Mission</p>
                    <p style={{fontSize: "20px", fontFamily: "sans-serif"}}>Our mission it to help others see how they can fix their problems <br /> and share their storys on how they made it threw their tough times. <br /> This isnt our only mission there is still more for us to do but and these mental <br /> problems will never end but atleast we can help them go threw their problems</p>
                </div>
            </div>
            <div style={{width: "100vw", height: "400px", border: "solid", borderColor: "black", borderBottomWidth: "2px", borderTopWidth: "2px"}}  className="flex justify-center items-center flex-row gap-40">
                <div>
                    <p style={{fontSize: "70px", fontFamily: "sans-serif"}} className="font-bold">Where we came from</p>
                    <p style={{fontSize: "20px", fontFamily: "sans-serif"}}>MHChat was made by us as our group project.<br /> We made this website aftrer a long debait on what to make we came up with this. <br />We liked the ideaof others heping others with their storys and mor so we made this.</p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <p style={{fontSize: "100px", fontFamily: "sans-serif"}}>Our Team</p>
                <img src="logo.png" style={{width: "400px", height: "400px"}}></img>
            </div>
            <div style={{width: "100vw", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <div className="justify-center items-center flex flex-row w-screen" style={{height: "200px", borderColor: "black", border: "solid", borderRightidth: "2px", borderLeftWidth: "2px"}}>
                    <div style={{width: "220px", height: "200px", border: "solid", borderColor: "black", borderRightWidth: "2px", borderLeftWidth: "2px", backgroundColor: "rgb(164, 223, 252)"}} className="flex justify-center items-center"><Image src={me} width={190} height={190}/> </div>
                    <div style={{width: "220px", height: "200px", backgroundColor: "rgb(164, 223, 252)", border: "solid", borderColor: "black", borderTopWidth: "2px"}} className="flex justify-center items-center"><Image src={enkhee} width={190} height={190}/> </div>
                    <div style={{width: "220px", height: "200px", borderColor: "black", border: "solid", borderLeftWidth: "2px",  backgroundColor: "rgb(164, 223, 252)"}} className="flex justify-center items-center"><Image src={dawaa} width={185} height={185}/> </div>
                    <div style={{width: "220px", height: "200px", borderColor: "black", border: "solid", borderRightWidth: "2px",  backgroundColor: "rgb(164, 223, 252)"}} className="flex justify-center items-center"><Image src={buson} width={170} height={170}/> </div>
                </div>
                <div className="justify-center items-center flex flex-row w-screen" style={{height: "300px", borderColor: "black", border: "solid", borderBottomWidth: "2px"}}>
                    <div className="justify-center items-center flex flex-col w-screen" style={{width: "220px", height: "300px", borderColor: "black", border: "solid", borderRightWidth: "2px", borderLeftWidth: "2px", paddingBottom: "100px"}}><p className="font-bold" style={{fontFamily: "sans-serif", fontSize: "30px",}}>Bat-Od</p><p>Team leader & <br /> back-end manager</p></div>
                    <div className="justify-center items-center flex flex-col w-screen" style={{width: "220px", height: "300px", paddingBottom: "80px"}}><p className="font-bold" style={{fontFamily: "sans-serif", fontSize: "30px", }}>Enkhmonkh</p><p>functionality <br /> manager</p></div>
                    <div className="justify-center items-center flex flex-col w-screen" style={{width: "220px", height: "300px", borderColor: "black", border: "solid", borderLeftWidth: "2px", paddingBottom: "100px"}}><p className="font-bold" style={{fontFamily: "sans-serif", fontSize: "30px",}}>Davaasuren </p><p>web <br /> designer</p></div>
                    <div className="justify-center items-center flex flex-col w-screen" style={{width: "220px", height: "300px", borderColor: "black", border: "solid ", borderaRightWidth: "2px", paddingBottom: "100px"}}><p className="font-bold" style={{fontFamily: "sans-serif", fontSize: "30px",}}>Buson</p><p>functionality <br />Developer</p></div>
                </div>
            </div>
        </div>
    )
}


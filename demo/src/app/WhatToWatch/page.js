"use client"
import Link from "next/link"
import style from "./main.module.css"
import { router } from "next"

export default function Main() {

    const videoLinks = [
        { url: 'https://www.youtube.com/watch?v=9mPwQTiMSj8', image: 'https://i.ytimg.com/vi/9mPwQTiMSj8/mqdefault.jpg', title: 'Generalized anxiety disorder (GAD) - causes, symptoms & treatment' },
        { url: 'https://www.youtube.com/watch?v=orx4adUXXhU', image: 'https://i.ytimg.com/vi/orx4adUXXhU/mqdefault.jpg', title: 'Anxiety Disorders Mnemonics (Memorable Psychiatry Lecture)' },
        { url: 'https://www.youtube.com/watch?v=zsC4Gf-SKOc', image: 'https://i.ytimg.com/vi/zsC4Gf-SKOc/mqdefault.jpg', title: 'The 7 Types of Anxiety Disorders' },
        { url: 'https://www.youtube.com/watch?v=uRufJh56y0E', image: 'https://i.ytimg.com/vi/uRufJh56y0E/mqdefault.jpg', title: 'Anxiety Disorder' },
    ];
    const biopolarVid = [
        { url: 'https://www.youtube.com/watch?v=O4D8XIsoU0Y', image: 'https://i.ytimg.com/vi/O4D8XIsoU0Y/mqdefault.jpg', title: 'Understanding Bipolar Disorder: Symptoms, Causes and Treatments' },
        { url: 'https://www.youtube.com/watch?v=m_OazsImOiI', image: 'https://i.ytimg.com/vi/m_OazsImOiI/mqdefault.jpg', title: 'The Science & Treatment of Bipolar Disorder' },
        { url: 'https://www.youtube.com/watch?v=dQtnrY8q3uE', image: 'https://i.ytimg.com/vi/dQtnrY8q3uE/mqdefault.jpg', title: 'Bipolar Disorder: History, Treatments, and New Studies | Mass General Brigham' },
        { url: 'https://www.youtube.com/watch?v=KDMbRW_fEwM', image: 'https://i.ytimg.com/vi/KDMbRW_fEwM/mqdefault.jpg', title: 'Bipolar Disorder - Why One Medication May Not Work' },
    ];
    const schizophreniaVid = [
        { url: 'https://www.youtube.com/watch?v=6As9IOWDueQ', image: 'https://i.ytimg.com/vi/6As9IOWDueQ/mqdefault.jpg', title: 'What Is Schizophrenia Anyways?' },
        { url: 'https://www.youtube.com/watch?v=yc29oKFyAro', image: 'https://i.ytimg.com/vi/yc29oKFyAro/mqdefault.jpg', title: 'Schizophrenia Inpatient Treatment' },
        { url: 'https://www.youtube.com/watch?v=TFVu6ICa8pQ&t=17s', image: 'https://i.ytimg.com/vi/TFVu6ICa8pQ/mqdefault.jpg', title: 'Schizophrenia Treatment Options' },
        { url: 'https://www.youtube.com/watch?v=Eq9EoqUFqjk', image: 'https://i.ytimg.com/vi/Eq9EoqUFqjk/mqdefault.jpg', title: 'Treatment Options for Schizophrenia' },
    ];
    const eatingDisordersVid = [
        { url: 'https://youtube.com/watch?v=3Bax8ijH038', image: 'https://i.ytimg.com/vi/3Bax8ijH038/mqdefault.jpg', title: 'Why are eating disorders so hard to treat? - Anees Bahji' },
        { url: 'https://www.youtube.com/watch?v=aBl6-UTvmn8', image: 'https://i.ytimg.com/vi/aBl6-UTvmn8/mqdefault.jpg', title: 'What is an Eating Disorder?' },
        { url: 'https://www.youtube.com/watch?v=MsSXh1BxLjE', image: 'https://i.ytimg.com/vi/MsSXh1BxLjE/mqdefault.jpg', title: 'Signs of an Eating Disorder' },
        { url: 'https://www.youtube.com/watch?v=CJWR5m_z5FE', image: 'https://i.ytimg.com/vi/CJWR5m_z5FE/mqdefault.jpg', title: 'How Do Eating Disorders Actually Work? ft. Kati Morton' },
    ];
    const ptsdVid = [
        { url: 'https://www.youtube.com/watch?v=hzSx4rMyVjI', image: 'https://i.ytimg.com/vi/hzSx4rMyVjI/mqdefault.jpg', title: 'Why are eating disorders so hard to treat? - Anees Bahji' },
        { url: 'https://www.youtube.com/watch?v=qOkJeAbddDw', image: 'https://i.ytimg.com/vi/qOkJeAbddDw/mqdefault.jpg', title: 'What Is PTSD, Exactly?' },
        { url: 'https://www.youtube.com/watch?v=FeLLt39DI8A', image: 'https://i.ytimg.com/vi/FeLLt39DI8A/mqdefault.jpg', title: 'PTSD Treatment: Know Your Options' },
        { url: 'https://www.youtube.com/watch?v=yKQTB3CG-yI', image: 'https://i.ytimg.com/vi/yKQTB3CG-yI/mqdefault.jpg', title: 'Post Traumatic Stress Disorder (PTSD) Explained' },
    ];
    const nddVid = [
        { url: 'https://www.youtube.com/watch?v=lc5XDJIgz1s', image: 'https://i.ytimg.com/vi/lc5XDJIgz1s/mqdefault.jpg', title: 'Neurodevelopmental disorders: Sufficient and necessary causes' },
        { url: 'https://www.youtube.com/watch?v=5rqX-xonN8U', image: 'https://i.ytimg.com/vi/5rqX-xonN8U/mqdefault.jpg', title: 'Mechanisms and Adult Treatments for Neurodevelopmental Disorders' },
        { url: 'https://www.youtube.com/watch?v=ghpPGc1qfSc', image: 'https://i.ytimg.com/vi/ghpPGc1qfSc/mqdefault.jpg', title: 'Understanding neurodevelopmental disorders and the people they affect' },
        { url: 'https://www.youtube.com/watch?v=h1eJgm7SXz0', image: 'https://i.ytimg.com/vi/h1eJgm7SXz0/mqdefault.jpg', title: 'Childhood Neurodevelopmental Disabilities' },
    ];
    const dbddVid = [
        { url: 'https://www.youtube.com/watch?v=qTHy6yu1ffY', image: 'https://i.ytimg.com/vi/qTHy6yu1ffY/mqdefault.jpg', title: 'Types of Disruptive Behavior Disorders' },
        { url: 'https://www.youtube.com/watch?v=kNPKb9ouoIg', image: 'https://i.ytimg.com/vi/kNPKb9ouoIg/mqdefault.jpg', title: 'Externalizing Disorders' },
        { url: 'https://www.youtube.com/watch?v=QLc22unQOfI', image: 'https://i.ytimg.com/vi/QLc22unQOfI/mqdefault.jpg', title: 'What Is a Disruptive Behavior Disorder? | Child Psychology' },
        { url: 'https://www.youtube.com/watch?v=bf-5xJbznoo', image: 'https://i.ytimg.com/vi/bf-5xJbznoo/mqdefault.jpg', title: 'What are Disruptive Behavior Disorders?' },
    ];
    const depressionVid = [
        { url: 'https://www.youtube.com/watch?v=baqXeUOcyJw', image: 'https://i.ytimg.com/vi/baqXeUOcyJw/mqdefault.jpg', title: 'How Do You Know If You Have Depression?' },
        { url: 'https://www.youtube.com/watch?v=_5OkC09xP34', image: 'https://i.ytimg.com/vi/_5OkC09xP34/mqdefault.jpg', title: 'Living With Depression' },
        { url: 'https://www.youtube.com/watch?v=KaZTnlFJGMY', image: 'https://i.ytimg.com/vi/KaZTnlFJGMY/mqdefault.jpg', title: 'New treatments for severe depression' },
        { url: 'https://www.youtube.com/watch?v=z-IR48Mb3W0', image: 'https://i.ytimg.com/vi/z-IR48Mb3W0/mqdefault.jpg', title: 'What is depression?' },
    ];
    return (
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
                                    href={"./AboutUs"}>
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
                                    href={"./Chat"}>
                                    <div className={style.PageName}>Chat</div>
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
                                <div className={style.Name}>
                                    Welcome
                                </div>
                                <div className={style.bottomText}>To MHChat</div>
                                <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-auto w-screen">
                    {/* Anxiety disorder */}
                    <div style={{margin: "10px", display: 'flex', gap: "20px", flexDirection: "column"}}>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)",}}>Anxiety disorder</p>
                    <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {videoLinks.map((video, index) => (
                            <button onClick={() => router.push(video.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={video.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{video.title}</p>
                            </button>
                        ))}
                    </div>
                    </div>
                    {/* Bipolar Disorder */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>Bipolar Disorder</p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {biopolarVid.map((biopolar, index) => (
                            <button onClick={() => router.push(biopolar.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={biopolar.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{biopolar.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* Schizophrenia */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>Schizophrenia</p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {schizophreniaVid.map((schizophrenia, index) => (
                            <button onClick={() => router.push(schizophrenia.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={schizophrenia.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{schizophrenia.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* Eating Disorders */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>Eating Disorders</p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {eatingDisordersVid.map((schizophrenia, index) => (
                            <button onClick={() => router.push(schizophrenia.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={schizophrenia.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{schizophrenia.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* PTSD */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>PTSD</p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {ptsdVid.map((ptsd, index) => (
                            <button onClick={() => router.push(ptsd.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={ptsd.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{ptsd.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* neurodevelopmental disorders */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>NDD</p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {nddVid.map((ndd, index) => (
                            <button onClick={() => router.push(ndd.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={ndd.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{ndd.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* DBDD */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>DBDD</p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {dbddVid.map((dbdd, index) => (
                            <button onClick={() => router.push(dbdd.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={dbdd.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{dbdd.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                    {/* Depression */}
                    <div style={{margin: "10px", borderColor: "lightgray", borderTopWidth: "3px",}}>
                    <div>
                    <p style={{fontFamily:'sans-serif', fontSize: "40px",  color: "rgba(77, 189, 152, 0.846)"}}>Depression </p>
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}>
                        {depressionVid.map((depression , index) => (
                            <button onClick={() => router.push(depression.url)} style={{ width: "320px", height: "230px", backgroundColor: "white" }}>
                                <img src={depression.image} style={{ borderRadius: "12px" }}></img>
                                <p style={{ fontFamily: "sans-serif", }}>{depression.title}</p>
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

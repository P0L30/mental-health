import Link from "next/link"
import style from "./main.module.css"
 
export default function Main() {
    return (
        <div>
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
                                    href={"./WhatToDo"}>
                                    <div className={style.PageName}>What To Do</div>
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
                                <div className={style.Name}>
                                    Welcome
                                </div>
                                <div className={style.bottomText}>To MHChat</div>
                                <div className={style.text}>This site was made for people to talk and learn about their mental health issues. So seek out help from others who are in the same place as you and talk to our professional psychologist and get better. </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                {/* page 2 */}
                
 
                <div className={style.twoCenter}>
 
                    <div className={style.widthflex}>
                        <div>
                            <img src="stres.png" className={style.img}></img>
                        </div>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>Anxiety Disorders</div>
                                <div className={style.texts}>In 2019, 301 million people, including 58 million children, had anxiety disorders marked by excessive fear, worry, and related behaviors. Disorders like generalized anxiety, panic, social anxiety, and separation anxiety were prevalent. Effective psychological treatments exist, with medication considered based on age and severity.</div>
                            </div>
                        </div>
                    </div>
 
 
 
                    <div className={style.widthflex}>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>Bipolar Disorder</div>
                                <div className={style.texts}>Depression In 2019, 280 million people globally lived with depression, including 23 million children and adolescents. Depression involves persistent feelings of sadness, loss of interest or pleasure in activities, and other symptoms like poor concentration, guilt, hopelessness, and disrupted sleep. It can lead to suicidal thoughts and increased suicide risk. Effective psychological treatments and sometimes medication are available for managing depression.</div>
                            </div>
                        </div>
                        <div>
                            <img src="hrul.png" className={style.img}></img>
                        </div>
                    </div>
 
                    <div className={style.widthflex}>
                        <div>
                            <img src="suns.png" className={style.img}></img>
                        </div>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>Schizophrenia</div>
                                <div className={style.texts}>Schizophrenia affects around 24 million globally, leading to a reduced life expectancy. Symptoms include perceptual disturbances and behavioral changes such as delusions and hallucinations. Treatment options like medication, psychoeducation, and family support aim to manage symptoms and improve quality of life.</div>
                            </div>
                        </div>
                    </div>
 
                    <div className={style.widthflex}>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>Eating Disorders</div>
                                <div className={style.texts}>In 2019, 14 million people, including 3 million children and adolescents, had eating disorders like anorexia nervosa and bulimia nervosa (1). These disorders involve abnormal eating behaviors, intense body image concerns, and significant health risks. Effective treatments, such as family-based therapy and cognitive therapy, are available.</div>
                            </div>
                        </div>
                        <div>
                            <img src="eating.png" className={style.img}></img>
                        </div>
                    </div>
 
                    <div className={style.widthflex}>
                        <div>
                            <img src="sna-aldh.png" className={style.img}></img>
                        </div>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>PTSD</div>
                                <div className={style.texts}>In conflict-affected settings, the prevalence of PTSD and other mental disorders is notably high. PTSD, which can develop after exposure to severe trauma, is marked by several key symptoms: re-experiencing traumatic events through intrusive memories or nightmares, avoidance of related thoughts or situations, and a persistent sense of heightened threat. These symptoms persist for weeks and impair daily functioning. Fortunately, effective psychological treatments are available for managing PTSD.</div>
                            </div>
                        </div>
                    </div>
 
                    <div className={style.widthflex}>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>NDD</div>
                                <div className={style.texts}>Neurodevelopmental disorders, such as ADHD, ASD, and intellectual development disorders, emerge during development and affect various functions. ADHD involves inattention and hyperactivity, while intellectual development disorders show cognitive limitations. ASD includes social communication difficulties and repetitive behaviors. Treatment options include therapy and medication.</div>
                            </div>
                        </div>
                        <div>
                            <img src="NDD.png" className={style.img}></img>
                        </div>
                    </div>
 
                    <div className={style.widthflex}>
                        <div>
                            <img src="eej-uurlw.png" className={style.img}></img>
                        </div>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>DBDD</div>
                                <div className={style.texts}>In 2019, 40 million people, including children and adolescents, had conduct-dissocial disorder (1), also known as conduct disorder. This condition involves persistent behavioral issues like defiance and violating societal norms, often starting in childhood. Effective psychological treatments include involving parents and cognitive problem-solving or social skills training.</div>
                            </div>
                        </div>
                    </div>
 
                    <div className={style.widthflex}>
                        <div className={style.textCenter}>
                            <div>
                                <div className={style.word}>Depression</div>
                                <div className={style.texts}>In 2019, 280 million people, including 23 million children and adolescents, lived with depression. Unlike typical mood swings, depression entails persistent feelings of sadness, emptiness, or loss of interest in activities for at least two weeks. Symptoms may include poor concentration, excessive guilt, hopelessness, suicidal thoughts, sleep disturbances, appetite changes, and fatigue. Depression poses a heightened risk of suicide, but effective psychological treatments and, in some cases, medication are available.</div>
                            </div>
                        </div>
                        <div>
                            <img src="gunig.png" className={style.img}></img>
                        </div>
                    </div>
 
                    <div className={style.white}></div>
 
                </div>
            </div>
        </div>
    )
}
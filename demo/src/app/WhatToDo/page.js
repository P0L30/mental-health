import Link from "next/link";
import style from "./what.module.css"
 
export default function Watch() {
    return (
        <div className={style.body}>
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
 
            <div className={style.twoCenter}>
 
                <div className={style.widthflex}>
                    <div>
                        <img src="noStress.png" className={style.img}></img>
                    </div>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>Anxiety Disorders</div>
                            <div className={style.texts}>
                                <p>
                                    - Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation.<br />
                                    - Cognitive-behavioral therapy (CBT) can help in identifying and challenging negative thought patterns.<br />
                                    - Regular exercise and maintaining a healthy lifestyle can alleviate anxiety symptoms.<br />
                                    - Limit caffeine and alcohol intake, as they can exacerbate anxiety.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
 
 
 
                <div className={style.widthflex}>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>Bipolar Disorder</div>
                            <div className={style.texts}>
                                <p>
                                    - Adhere to a regular schedule for sleeping, eating, and activities to help stabilize mood.<br />
                                    - Medications prescribed by a psychiatrist are often necessary to manage symptoms.<br />
                                    - Psychotherapy, particularly cognitive-behavioral therapy and interpersonal therapy, can be beneficial.<br />
                                    - Avoid stressors and triggers that can lead to mood episodes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="hariltsa.png" className={style.img}></img>
                    </div>
                </div>
 
                <div className={style.widthflex}>
                    <div>
                        <img src="friends.png" className={style.img}></img>
                    </div>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>Schizophrenia</div>
                            <div className={style.texts}>
                                <p>
                                    - Consistent medication management is crucial for managing symptoms. <br />
                                    - Participate in therapy, such as cognitive-behavioral therapy for psychosis (CBTp), which can help in managing symptoms and improving functioning.<br />
                                    - Engage in supportive services such as vocational rehabilitation and housing assistance.<br />
                                    - Stay connected with friends, family, and support groups to reduce social isolation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className={style.widthflex}>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>Eating Disorders</div>
                            <div className={style.texts}>
                                <p>
                                    - Seek professional help from a therapist specializing in eating disorders and a registered dietitian.<br />
                                    - Establish regular and balanced eating patterns.<br />
                                    - Challenge negative thoughts and beliefs about body image and food through therapy.<br />
                                    - Avoid triggers such as weighing yourself frequently or engaging in excessive exercise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="hool.png" className={style.img}></img>
                    </div>
                </div>
 
                <div className={style.widthflex}>
                    <div>
                        <img src="yriltsah.png" className={style.img}></img>
                    </div>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>PTSD</div>
                            <div className={style.texts}>
                                <p>
                                    - Consider therapy options such as cognitive processing therapy (CPT), prolonged exposure therapy (PE), or eye movement desensitization and reprocessing (EMDR).<br />
                                    - Develop healthy coping mechanisms such as journaling, mindfulness, or relaxation techniques.<br />
                                    - Create a safe environment and establish routines to help manage triggers.<br />
                                    - Build a support network with understanding friends, family, or support groups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className={style.widthflex}>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>NDD</div>
                            <div className={style.texts}>
                                <p>
                                    - Depending on the specific disorder (e.g., ADHD, autism), treatments may include medication, behavioral therapy, occupational therapy, or speech therapy.<br />
                                    - Establish routines and consistency to help manage symptoms.<br />
                                    - Seek support from professionals who specialize in neurodevelopmental disorders.<br />
                                    - Explore educational accommodations and support services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="NDD.png" className={style.img}></img>
                    </div>
                </div>
 
                <div className={style.widthflex}>
                    <div>
                        <img src="tevrelt.png" className={style.img}></img>
                    </div>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>DBDD</div>
                            <div className={style.texts}>
                                <p>
                                    - Therapy such as cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), or family therapy may be beneficial.<br />
                                    - Develop strategies for managing anger and impulsive behavior.<br />
                                    - Medication may be prescribed in some cases to manage symptoms such as aggression or mood instability.<br />
                                    - Encourage healthy relationships and communication skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className={style.widthflex}>
                    <div className={style.textCenter}>
                        <div>
                            <div className={style.word}>Depression</div>
                            <div className={style.texts}>
                                <p>
                                    - Seek therapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, to address negative thought patterns and improve coping skills.<br />
                                    - Consider medication prescribed by a psychiatrist if necessary.<br />
                                    - Engage in regular physical activity, which can help alleviate symptoms of depression.<br />
                                    - Connect with supportive friends, family, or support groups for emotional support.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="gunig.png" className={style.img}></img>
                    </div>
                </div>
 
                <div className={style.white}></div>
 
 
            </div>
        </div>
    )
}
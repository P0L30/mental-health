"use client"
import { useRouter } from 'next/navigation';
import { useState } from "react";
import axios from 'axios'
import Image from 'next/image';
import image1 from '../../../public/image1.png'
import image2 from '../../../public/image2.png'
import image3 from '../../../public/image3.png'
import shape from '../../../public/tseg.png'
import shape1 from '../../../public/ugalz.png'
import shape2 from '../../../public/doligon.png'
import shape3 from '../../../public/tsagirag.png'
import style from "../home.module.css"

export default function Home() {

  const [loginData, setLoginData] = useState({});
  const router = useRouter();

  const handleLogin = async () => {
    console.log(loginData)
    const { data } = await axios.post('http://localhost:5000/signup', {
      email: loginData.email, 
      password: loginData.password
    });
    if (data?.user) {
      localStorage.setItem("uid", data.user.id);
      router.push('/main');
    }
  }
    return (
      <div className="w-screen h-screen bg-white flex gap-8 justify-center items-center">
        <Image src={shape} width={100} height={100} style={{position: "absolute", left: "100px", bottom: "100px"}}/>
        <Image src={shape} width={100} height={100} style={{position: "absolute", left: "150px", top: "100px"}}/>     
        <Image src={shape1} width={100} height={100} style={{position: "absolute", left: "900px", bottom: "300px"}}/>
        <Image src={shape1} width={100} height={100} style={{position: "absolute", left: "500px", top: "200px"}}/>
        <Image src={shape2} width={150} height={150} style={{position: "absolute", left: "200px", top: "400px"}}/>
        <Image src={shape3} width={50} height={50} style={{position: "absolute", left: "700px", top: "300px"}}/>
        <div style={{position: "absolute", top: "360px", left: "350px", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <p style={{fontSize: "60px", fontFamily: "apple chancery", color: "rgba(77, 189, 152, 0.846)"}}>Welcome to MHChat</p>
          <p>We hope you have a great time</p>
        </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>          
          <input placeholder="Username" onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))} className="w-80 h-16 m-6 p-4 border-black border-4 text-black" style={{borderRadius: "48px", borderColor: "rgba(77, 189, 152, 0.846)", position: "absolute", top: "500px", left: "350px"}} />
          <input type="Password" placeholder="password" onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))} className="w-80 h-16 p-4 border-black border-4 text-black" style={{borderRadius: "48px", borderColor: "rgba(77, 189, 152, 0.846)", position: "absolute", top: "600px", left: "375px"}} />
          <button onClick={handleLogin} className="w-40 h-12 border-black border-4 text-black" style={{ position: "absolute", top: "700px", left: "455px", borderRadius: "48px", borderColor: "rgba(77, 189, 152, 0.846)"}}>Sign up</button>
          </div>
          <div className={style.box}
          style={{
            backgroundColor: " rgba(77, 189, 152, 0.846)",
           width: "50vw", 
           height: "98.5vh", 
           borderRadius: "28px", 
           position: "absolute", 
           right: "10px", 
           top: "10px", 
           display: "flex", 
           justifyContent: "center", 
           alignItems: "center"}}>
            <Image src={image1} width={550} height={400} style={{position: "absolute", top: "100px", left: "100px"}}/>
            <Image src={image2} width={450} height={400} style={{position: "absolute", top: "270px", right: "200px", zIndex: 2}}/>
            <div  style={{position: "absolute", top: "570px", left: "180px", backgroundColor: "#F9E076", borderRadius: "50%", width: "400px", height: "400px", justifyContent: "center", alignItems: "center", display: "flex"}}><Image src={image3} width={450} height={400}/></div>
            </div>
      </div>
    );
  }

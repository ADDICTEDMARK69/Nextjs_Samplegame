"use client"

import Lottie from "lottie-react";
import cardanimation from "@/app/animated_assets/cardanimation.json";
import styles from "./design.module.css"; 
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();
  const [isLoading,setisLoading]=useState(false);
  //functions

  const loginFunc=()=>{

    // setisLoading(true);

    // setTimeout(()=>{
    //   setisLoading(false);
    // },1200)
    

    router.push("/components/battlefield");


 
  }

  const signupFunc=()=>{

    router.push("/components/signup");
  }

  return (
    <div className="bg-[url('/login_signup.jpg')] flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 font-sans dark:bg-black">
        
      <main className={styles.loginContainer}>
        
      <div className={`${styles.loginCon} shadow-md w-[500px] h-[500px] rounded-tl-[120px] space-y-4 p-10 flex flex-col items-center justify-center
  bg-white/20 backdrop-blur-md border border-white/30`}>


        <h1 className=" text-4xl font-bold italic">LOGIN</h1>

        <div className="flex flex-col gap-5 mt-10">

           <input
      type="username" 
      placeholder="Enter your username"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />
  

    
           <input 
      type="password" 
      placeholder="Enter your password"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />

       </div>

       <div className={`${styles.loginBtnCon} mt-10 flex flex-col max-w-[360px] gap-3`}>
  <button
    type="button"
    onClick={loginFunc}
    className="h-16 rounded-2xl bg-neutral-900 text-white font-semibold shadow-md transition
               hover:bg-neutral-800 active:scale-[0.98]
               focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:ring-offset-2 focus:ring-offset-transparent"
  >
    LOGIN
  </button>
  
  <p className="text-sm text-neutral-700">
      Don’t have an account?{" "}
      <button
        type="button"
        onClick={() => router.push("/components/signup")}
        className="font-semibold text-orange-600 hover:underline"
      >
        Sign up
      </button>
    </p>
</div>
        

      </div>

      {/* right panel */}
      <div
  className={`${styles.gifCon} w-[500px] h-[500px] border border-orange-200/40
  bg-orange-100/10 backdrop-blur-md
  shadow-[0_20px_60px_rgba(0,0,0,0.25),0_0_40px_rgba(251,146,60,0.25)]
  flex items-center justify-center overflow-hidden`}
>
  <Lottie className={styles.gif} animationData={cardanimation} loop />
</div>
        
      </main>

     { isLoading ?<div className={styles.spinner}></div> : null}

    </div>
  );
}

'use client'
import { use, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import FloatMsg from "./components/FloatMsg";
import FloatMsgSecond from "./components/FloatMsgSecond";

export default function Home() {
  const [isLogin, setLogin] = useState(false)
  const [isFloatMsg, setFloatMsg] = useState(true)

  return (
    <main className="flex flex-col justify-between items-center p-5">
      {isFloatMsg ? <><button className="z-[100] absolute top-5 right-10 text-slate-100 underline" onClick={()=> setFloatMsg(false)}>Skip</button><FloatMsgSecond /><FloatMsg /></> : ''}
      {isLogin ? <><Login />
      <p className="text-sm mt-10 font-medium">Already have an account? <button onClick={() => setLogin(false)} className="text-blue underline">Register</button></p></> : <><Register />
      <p className="text-sm mt-10 font-medium">Already have an account? <button onClick={() => setLogin(true)} className="text-blue underline">Login</button></p></>}
      
    </main>
  );
}

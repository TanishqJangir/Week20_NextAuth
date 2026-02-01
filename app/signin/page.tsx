"use client"

import axios from "axios";
import Link from "next/link";
import { useRef } from "react"


export default function Signup(){
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const usernameRef = useRef<HTMLInputElement | null>(null);


    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if(!username || !password){
            return alert("Username and pasword are required")
        }

        const response = await axios.post<{token : string}>("http://localhost:3000/api/signin",{
            username : username,
            password : password
        });
        
        localStorage.setItem("token", response.data.token);
        alert("token saved to local storage")
    }

    return <div className="flex justify-center items-center h-screen shadow-2xl">
        <div className="border-2 rounded-xl flex flex-col justify-center p-10 gap-9">
            <div className="text-center text-4xl">Signin</div>
            <input type="text" ref={usernameRef} placeholder="Enter Username" className="text-2xl p-2 rounded-xl outline-none border-2 pl-5" />
            <input type="password" ref={passwordRef} placeholder="Enter Password" className="text-2xl p-2 rounded-xl outline-none border-2 pl-5" />
            <button className="text-2xl border-2 rounded-full py-1 cursor-pointer hover:bg-white hover:text-black transition-all ease-in duration-300" onClick={signup}>Submit</button>
            <div className=" pl-4">You are new user <Link href={"/signup"} className="text-blue-300 underline">signup</Link></div>
        </div>
    </div>
}
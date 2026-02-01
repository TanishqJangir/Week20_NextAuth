"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"


export default function Home(){
  return <SessionProvider>
    <RealHome/>
  </SessionProvider>
}


function RealHome(){
  const session = useSession();

  return <div className="flex flex-col justify-center items-center gap-7 h-screen">
    {session.status === "authenticated" && <button onClick={() => signOut()} className="bg-white text-black px-8 py-3 rounded-xl font-bold cursor-pointer active:bg-gray-200">Logout</button>}
    {session.status === "unauthenticated" && <button onClick={() => signIn()} className="bg-white text-black px-8 py-3 rounded-xl font-bold cursor-pointer active:bg-gray-200">Signin</button>}
  </div>
}
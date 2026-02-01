import { getServerSession } from "next-auth"


export default async function Home(){
  const session = await getServerSession();

  return <div className="flex flex-col justify-center items-center gap-7 h-screen">
    {/* {session.status === "authenticated" && <button onClick={() => signOut()} className="bg-white text-black px-8 py-3 rounded-xl font-bold cursor-pointer active:bg-gray-200">Logout</button>} */}
    {/* {session.status === "unauthenticated" && <button onClick={() => signIn()} className="bg-white text-black px-8 py-3 rounded-xl font-bold cursor-pointer active:bg-gray-200">Signin</button>} */}

    {JSON.stringify(session)}
  </div>
}
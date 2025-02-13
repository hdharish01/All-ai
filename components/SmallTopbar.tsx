"use client"

import { useRouter } from "next/navigation"

export function SmallTopbar(){
    const router = useRouter()
    return <div className="fixed top-0 left-0 z-50 w-full flex justify-between bg-blue-900 md:bg-transparent p-6">
        <button className="flex flex-col justify-center text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-emerald-400 text-5xl font-mono font-extrabold ml-4" onClick={()=>{router.push("/")}}>
            All-ai
        </button>
    </div>
}
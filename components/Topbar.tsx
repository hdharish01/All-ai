"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function Topbar(){
    const router = useRouter();
    return <div className="flex justify-between border-2 bg-emerald-500/10 p-6 mx-8 rounded-full">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-emerald-400 text-5xl flex flex-col justify-center font-mono font-extrabold ml-4">
            All-ai
        </div>
        <div className="flex flex-col justify-center mr-4">
            <Button className="rounded-2xl border-2 bg-clip-border bg-gradient-to-r from-emerald-700 to-cyan-900 shadow-sm hover:shadow-white" onClick={() => {
                router.push('/chat')
            }}>Chat</Button>
        </div>
    </div>
}
"use client"

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export function Topbar(){
    return <div className="flex justify-between border-2 p-6 mx-8 rounded-full">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-emerald-400 text-5xl flex flex-col justify-center font-mono font-extrabold ml-4">
            All-ai
        </div>
        <div className="flex flex-col justify-center mr-4">
            <Button variant={"login"} onClick={() => {
                signIn(undefined, {callbackUrl:"/chat"})
            }}>SignIn</Button>
        </div>
    </div>
}
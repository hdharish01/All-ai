"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";


export function SmallTopbar({userAvatar}:{userAvatar: React.ReactNode}){
    
    return <div className="fixed top-0 left-0 z-50 w-full flex justify-between bg-blue-900 md:bg-transparent p-6">
        <div className="flex flex-col justify-center text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-emerald-400 text-5xl font-mono font-extrabold ml-4">
            All-ai
        </div>
        <div className="flex flex-col justify-center border-2 p-4  rounded-full">
            <div className="flex">
                <div className="flex flex-col justify-center">
                    <Button className="rounded-2xl" onClick={() => {signOut()}}>Signout</Button>
                </div>
                <div>
                    {userAvatar}
                </div>
            </div>
        </div>
    </div>
}
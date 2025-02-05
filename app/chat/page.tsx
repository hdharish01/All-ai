"use client"
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Chat(){
    return <div>
        Hello this is All-ai chat which has all the chats
        <Button onClick={() => {signOut()}}>Signout</Button>
    </div>
}
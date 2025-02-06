"use client"

import { useState } from "react";
import { Button } from "./ui/button";

type modelUsedType = "chatgpt" | "claude" | "deepseek" | "llama"

export function ChatBox(){
    const [textInput, setTextInput] = useState("")
    const [modelUsed, setModelUsed] = useState<modelUsedType>("chatgpt")
    
    return <div className="fixed bottom-20 left-0 right-0 mx-auto w-[90%] max-w-[40rem]">
        <div className="flex flex-col justify-end ">
            <div className="flex flex-col md:flex-row sm:flex-row gap-2">
                <div className="border-2 rounded-full flex justify-between p-4 w-full">
                    <input type="text" placeholder="Chat here" className="bg-transparent focus:outline-none text-white w-full" value={textInput} onChange={(e)=>setTextInput(e.target.value)}/>
                    <Button className="rounded-full text-xl shrink-0">⮝</Button>
                </div>
                <div className="flex flex-col justify-center sm:ml-2">
                    <select className="bg-emerald-900 rounded-full text-white p-2 w-full sm:w-auto hover:bg-emerald-950 focus:bg-emerald-950" value={modelUsed} onChange={(e)=>setModelUsed(e.target.value as modelUsedType)}>
                        <option value={"chatgpt"}>chatGPT</option>
                        <option value={"claude"}>Claude</option>
                        <option value={"deepseek"}>Deepseek</option>
                        <option value={"llama"}>Llama</option>
                    </select>
                </div>
            </div>           
        </div>
    </div>  
}
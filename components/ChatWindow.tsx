"use client"

import { useState } from "react";
import { ChatBox } from "./ChatBox";
import { ChatOutputCard } from "./ChatOutputCard";
import { ChatInputCard } from "./ChatInputCard";

export type modelUsedType = "mistral" | "gemini" | "deepseek" | "llama"

export function ChatWindow(){
    const [textInput, setTextInput] = useState("")
    const [textOutput, setTextOutput] = useState("")
    const [modelUsed, setModelUsed] = useState<modelUsedType>("mistral")
    

    
    return <div>
        <div className="flex-grow overflow-y-auto pb-36">
            {textInput !== "" && <ChatInputCard inputText={textInput}></ChatInputCard>}
            {textOutput !== "" && <ChatOutputCard outputText={textOutput}></ChatOutputCard>}
        </div>
        
        <ChatBox textInput={textInput} modelUsed={modelUsed} textOutput={textOutput} setTextInput={setTextInput} setModelUsed={setModelUsed} setTextOutput={setTextOutput}></ChatBox>
    </div>
}
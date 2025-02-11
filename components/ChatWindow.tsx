"use client"

import { useState } from "react";
import { ChatBox } from "./ChatBox";
import { ChatOutputCard } from "./ChatOutputCard";
import { ChatInputCard } from "./ChatInputCard";

export type modelUsedType = "mistral" | "gemini" | "deepseek" | "llama"

export type Message = {
    role: "user" | "assistant";
    content: string;
}

export type geminiMessage = {
    role: "user" | "model";
    parts:{
        text:string;
    }[];
}

export function ChatWindow(){    
    const [textInput, setTextInput] = useState("")
    const [textOutput, setTextOutput] = useState("")
    const [modelUsed, setModelUsed] = useState<modelUsedType>("mistral")
    const [messages, setMessages] = useState<Message[]>([])
    const [geminiMessages, setGeminiMessages] = useState<geminiMessage[]>([])

    
    return <div>
        <div className="flex-grow overflow-y-auto pb-36">
            {textInput !== "" && <ChatInputCard inputText={textInput}></ChatInputCard>}
            {textOutput !== "" && <ChatOutputCard outputText={textOutput}></ChatOutputCard>}
        </div>
        
        <ChatBox geminiMessages={geminiMessages} setGeminiMessages={setGeminiMessages} messages={messages} setMessages={setMessages} textInput={textInput} modelUsed={modelUsed} textOutput={textOutput} setTextInput={setTextInput} setModelUsed={setModelUsed} setTextOutput={setTextOutput}></ChatBox>
    </div>
}
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
            {messages.map((msg,index)=>
                msg.role === "user" ? (
                    <ChatInputCard key={`msg-${index}`} inputText={msg.content}></ChatInputCard>
                ):(
                    <ChatOutputCard key={`msg-${index}`} outputText={msg.content}></ChatOutputCard>
                )
            )}

            {geminiMessages.map((msg,index) => 
                msg.role === "user" ? (
                    <ChatInputCard key={`msg-${index}`} inputText={msg.parts.map(p => p.text).join(" ")}></ChatInputCard>
                ):(
                    <ChatOutputCard key={`msg-${index}`} outputText={msg.parts.map(p => p.text).join(" ")}></ChatOutputCard>
                )
            )}
        </div>
        
        <ChatBox geminiMessages={geminiMessages} setGeminiMessages={setGeminiMessages} messages={messages} setMessages={setMessages} textInput={textInput} modelUsed={modelUsed} textOutput={textOutput} setTextInput={setTextInput} setModelUsed={setModelUsed} setTextOutput={setTextOutput}></ChatBox>
    </div>
}
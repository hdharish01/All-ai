"use client"

import { useState } from "react";
import { ChatBox } from "./ChatBox";
import { ChatOutputCard } from "./ChatOutputCard";
import { ChatInputCard } from "./ChatInputCard";
import { motion } from "framer-motion";

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

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

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
                    <motion.div key={`msg-${index}`} initial="hidden" animate="visible" variants={fadeIn}>
                        <ChatInputCard inputText={msg.content}></ChatInputCard>
                    </motion.div>
                ):(
                    <motion.div key={`msg-${index}`} initial="hidden" animate="visible" variants={fadeIn}>
                        <ChatOutputCard outputText={msg.content}></ChatOutputCard>
                    </motion.div>
                )
            )}

            {geminiMessages.map((msg,index) => 
                msg.role === "user" ? (
                    <motion.div key={`gemini-${index}`} initial="hidden" animate="visible" variants={fadeIn}>
                        <ChatInputCard inputText={msg.parts.map(p => p.text).join(" ")}></ChatInputCard>
                    </motion.div>
                    
                ):(
                    <motion.div key={`gemini-${index}`} initial="hidden" animate="visible" variants={fadeIn}>
                        <ChatOutputCard outputText={msg.parts.map(p => p.text).join(" ")}></ChatOutputCard>
                    </motion.div>
                )
            )}
        </div>
        
        <ChatBox geminiMessages={geminiMessages} setGeminiMessages={setGeminiMessages} messages={messages} setMessages={setMessages} textInput={textInput} modelUsed={modelUsed} textOutput={textOutput} setTextInput={setTextInput} setModelUsed={setModelUsed} setTextOutput={setTextOutput}></ChatBox>
    </div>
}
"use client"

import { mistral } from "@/app/actions/mistral";
import { geminiMessage, Message, modelUsedType } from "./ChatWindow";
import { Button } from "./ui/button";
import { gemini } from "@/app/actions/gemini";
import { togetherai } from "@/app/actions/togetherai";
import { togetherllama } from "@/app/actions/togetherllama";


type chatBoxProps = {
    textInput: string,
    modelUsed: modelUsedType,
    textOutput:string,
    messages: Message[],
    geminiMessages: geminiMessage[],
    setTextInput: (value:string) => void,
    setModelUsed: (value:modelUsedType) => void,
    setTextOutput: (value:string) => void,
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    setGeminiMessages: React.Dispatch<React.SetStateAction<geminiMessage[]>>,
}

export function ChatBox({textInput, modelUsed, messages,geminiMessages ,setGeminiMessages , setMessages, setTextInput, setModelUsed, setTextOutput}:chatBoxProps){

    const handleSend = async () => {
        if(textInput.trim() === "") return;

        const newMessage:Message = {role:"user",content:textInput}
        const newGeminiMessage:geminiMessage = {role:"user",parts:[{text:textInput}]}
        if(modelUsed !== "gemini") { setMessages([...messages,newMessage]) }
        if(modelUsed === "gemini") { setGeminiMessages([...geminiMessages,newGeminiMessage]) }
        
        setTextInput("")

        if(modelUsed === "gemini"){
            const response = await gemini([...geminiMessages,newGeminiMessage])
            if(response){
                setGeminiMessages((prev:geminiMessage[]) => [
                    ...prev,
                    {role:"model",parts:[{text:response}]} as geminiMessage
                ])
            }
        }

        if(modelUsed === "mistral"){
            const response = await mistral([...messages,newMessage])
            if(response){
                setMessages((prev:Message[]) => [
                    ...prev,
                    {role:"assistant",content:response} as Message
                ])
            }
        }

        if(modelUsed === "deepseek"){
            const response = await togetherai([...messages,newMessage])
            if(response){
                setMessages((prev:Message[]) => [
                    ...prev,
                    {role:"assistant",content:response} as Message
                ])
            }
        }

        if(modelUsed === "llama"){
            const response = await togetherllama([...messages,newMessage])
            if(response){
                setMessages((prev:Message[]) => [
                    ...prev,
                    {role:"assistant",content:response} as Message
                ])
            }
        }
    }



    return <div className="fixed bottom-10 left-0 right-0 mx-auto w-[90%] max-w-[40rem]">
        <div className="flex flex-col justify-end ">
            <div className="flex flex-col md:flex-row sm:flex-row gap-2">
                <div className="border-2 rounded-full flex justify-between p-4 bg-gradient-to-r from-blue-950/95 to-blue-900/95 w-full">
                    <input type="text" placeholder="Chat here" className="bg-transparent focus:outline-none text-white w-full" value={textInput} onKeyDown={(e)=>{if(e.key === "Enter") handleSend()}} onChange={(e)=>{
                            setTextInput(e.target.value)
                        }}/>
                    <Button className="rounded-full text-xl shrink-0" onClick={handleSend}>⮝</Button>
                </div>
                <div className="flex flex-col justify-center sm:ml-2">
                    <select className="bg-emerald-900 rounded-full text-white p-2 w-full sm:w-auto hover:bg-emerald-950 focus:bg-emerald-950" value={modelUsed} onChange={(e)=>{
                                setModelUsed(e.target.value as modelUsedType)
                                setMessages([])
                                setGeminiMessages([])
                            }}>
                        <option value={"mistral"}>Mistral</option>
                        <option value={"gemini"}>Gemini</option>
                        <option value={"deepseek"}>Deepseek</option>
                        <option value={"llama"}>Llama</option>
                    </select>
                </div>
            </div>           
        </div>
    </div>  
}
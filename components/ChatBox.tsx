"use client"

import { mistral } from "@/app/actions/mistral";
import { modelUsedType } from "./ChatWindow";
import { Button } from "./ui/button";

type chatBoxProps = {
    textInput: string,
    modelUsed: modelUsedType,
    textOutput:string,
    setTextInput: (value:string) => void,
    setModelUsed: (value:modelUsedType) => void,
    setTextOutput: (value:string) => void,
}

export function ChatBox({textInput, modelUsed, textOutput, setTextInput, setModelUsed, setTextOutput}:chatBoxProps){

    return <div className="fixed bottom-10 left-0 right-0 mx-auto w-[90%] max-w-[40rem]">
        <div className="flex flex-col justify-end ">
            <div className="flex flex-col md:flex-row sm:flex-row gap-2">
                <div className="border-2 rounded-full flex justify-between p-4 bg-gradient-to-r from-blue-950/95 to-blue-900/95 w-full">
                    <input type="text" placeholder="Chat here" className="bg-transparent focus:outline-none text-white w-full" value={textInput} onChange={(e)=>setTextInput(e.target.value)}/>
                    <Button className="rounded-full text-xl shrink-0" onClick={async () => {
                            const response = await mistral(textInput)
                            if(response){setTextOutput(response)}
                    }}>⮝</Button>
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
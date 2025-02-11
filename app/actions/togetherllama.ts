"use server"

import { Message } from "@/components/ChatWindow";
import Together from "together-ai";

const together = new Together();

export async function togetherllama(messages:Message[]){
    try{
        const response = await together.chat.completions.create({
            messages:messages,
            model:"meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
            max_tokens: 1000,
        })
        return response.choices[0].message?.content
    }catch(error){
        console.error("error while fetching from together-ai",error)
        return "could not fetch the output from LLAMA"
    }
}
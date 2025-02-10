"use server"

import Together from "together-ai";

const together = new Together();

export async function togetherai(input:string){
    try{
        const response = await together.chat.completions.create({
            messages:[{"role":"user","content":input}],
            model:"deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
            max_tokens: 1000,
        })
        return response.choices[0].message?.content
    }catch(error){
        console.error("error while fetching from together-ai",error)
        return "could not fetch the output from the given deepseek"
    }
}
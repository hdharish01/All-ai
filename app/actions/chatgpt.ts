"use server"

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})



export async function chatgpt(input:string, retries = 3){
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: input },
            ],
            store: true,
        });

        return completion.choices[0].message.content;
    } catch (error: any) {
        if (error.code === 'insufficient_quota' && retries > 0) {
            console.log(`Quota exceeded. Retrying in 5 seconds...`);
            await new Promise(res => setTimeout(res, 5000)); // Wait 5s before retrying
            return chatgpt(input, retries - 1); // Retry request
        } else {
            throw error; // If out of retries, throw the error
        }
    }
}
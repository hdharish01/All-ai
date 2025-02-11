"use server"

import { geminiMessage } from "@/components/ChatWindow";

import { GoogleGenerativeAI } from "@google/generative-ai";

const google_api_key = process.env.GEMINI_API_KEY as string

const genAI = new GoogleGenerativeAI(google_api_key);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});

export async function gemini(geminiMessages:geminiMessage[]){
    try{
        const result = await model.generateContent({
            contents: geminiMessages
    });
        const response = await result.response.text()
        return response || "No response from gemini"
    }catch(error){
        console.error("Unable to fetch result from gemini:",error)
        return "error while fetching response"
    }
}
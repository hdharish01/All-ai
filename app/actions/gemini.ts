"use server"

const { GoogleGenerativeAI } = require("@google/generative-ai");

const google_api_key = process.env.GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(google_api_key);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});

export async function gemini(input:string){
    try{
        const result = await model.generateContent(input);
        const response = await result.response.text()
        return response || "No response from gemini"
    }catch(error){
        console.error("Unable to fetch result from gemini:",error)
        return "error while fetching response"
    }
}
"use server"

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY
});

export async function deepseek(input:string) {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: input}
        ],
        model: "deepseek-chat",
      });

      return completion.choices[0].message.content;
}
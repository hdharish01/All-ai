"use client"

import { Topbar } from "@/components/Topbar"




export default function Home() {
  return <div className="bg-gradient-to-br from-zinc-900 to-blue-800 min-h-screen pt-8">
    <div>
        <Topbar />
    </div>
    <div className="text-white text-4xl md:text-6xl lg:text-8xl p-10 mt-40 text-center">
      Welcome to All-ai, an all in one chatBot, which has Mistral , Deepseek, gemini and LLAMA
    </div>
    <div className="text-green-400 text-lg md:text-xl lg:text-2xl text-center">sign in to use the chat</div>
  </div>
}

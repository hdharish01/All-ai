"use client"

import { Topbar } from "@/components/Topbar"




export default function Home() {
  return <div className="bg-gradient-to-br from-zinc-900 to-blue-800 min-h-screen pt-8">
    <div>
        <Topbar />
    </div>
    <div className="text-white text-8xl p-10 mt-40 text-center">
      Welcome to All-ai, an all in one chatBot, which has chatGPT, Claude, Deepseek and LLAMA
    </div>
  </div>
}

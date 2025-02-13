"use client"

import { Topbar } from "@/components/Topbar"
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()

  return <div className="bg-gradient-to-br from-zinc-900 to-blue-800 min-h-screen pt-8">
    <style jsx>{`
        @keyframes wave {
          0%, 100% {
            background-position: 0% 50%;
            animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
          }
          50% {
            background-position: 100% 50%;
            animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
          }
        }
        .animate-wave {
          animation: wave 4s infinite;
        }
      `}</style>
    <div>
        <Topbar />
    </div>
    <div className="text-white text-4xl md:text-6xl lg:text-8xl p-10 mt-40 text-center">
      Welcome to All-ai, an all in one chatBot, which has Mistral , Deepseek, gemini and LLAMA
    </div>
    <div className="w-full flex justify-center">
      <button 
        className="bg-gradient-to-r from-cyan-700 via-slate-800 to-cyan-700 p-4 text-white text-xl md:text-2xl lg:text-3xl rounded-full border-2 bg-[length:400%_100%] animate-wave shadow-lg hover:shadow-white "
        onClick={()=>{
          router.push('/chat')
        }}
      >
        Click here to start chatting
      </button>
    </div>
  </div>
}

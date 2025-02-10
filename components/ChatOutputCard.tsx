"use client";

import ReactMarkdown from "react-markdown";

export function ChatOutputCard({outputText}:{outputText:string}){

    return <div className="relative -left-12 w-full flex justify-center my-5">
        <div className="border-2 rounded-3xl p-4 min-h-8 w-96 lg:w-[48rem] bg-gradient-to-br from-slate-950 to-slate-800 text-white">
            <ReactMarkdown>{outputText}</ReactMarkdown>
        </div>
    </div>
}   
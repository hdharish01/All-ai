export function ChatOutputCard({outputText}:{outputText:string}){
    return <div className="relative -left-12 w-full flex justify-center my-5">
        <div className="border-2 rounded-xl p-4 min-h-8 w-96 bg-gradient-to-br from-slate-900 to-slate-700 text-white font-mono">
            {outputText}
        </div>
    </div>
}
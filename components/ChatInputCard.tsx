export function ChatInputCard({inputText}:{inputText:string}){
    return <div className="relative right-12 w-full flex justify-center my-5">
        <div className="border-2 rounded-full p-4 min-h-8 max-w-96 bg-gradient-to-br from-emerald-900 to-green-700 text-white font-mono">
            {inputText}
        </div>
    </div>
}
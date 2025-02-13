
import { ChatWindow } from "@/components/ChatWindow";
import { SmallTopbar } from "@/components/SmallTopbar";


export default function Chat(){
    return <div className="bg-gradient-to-tr from-zinc-900 to-blue-800 min-h-screen">
        <div>
            <SmallTopbar></SmallTopbar>
            <div>
                <ChatWindow></ChatWindow>
            </div>
        </div>
    </div>
}
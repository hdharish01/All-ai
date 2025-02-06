import { ChatBox } from "@/components/ChatBox";
import { SmallTopbar } from "@/components/SmallTopbar";
import { UserAvatar } from "@/components/UserAvatar";

export default function Chat(){
    return <div className="bg-gradient-to-tr from-zinc-900 to-blue-800 min-h-screen">
        <div>
            <SmallTopbar userAvatar={<UserAvatar />}></SmallTopbar>
            <ChatBox></ChatBox>
        </div>
    </div>
}
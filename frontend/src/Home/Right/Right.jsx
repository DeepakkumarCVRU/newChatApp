import ChatUser from "./ChatUser"
import Messages from "./Messages"
import Type from "./Type"

const Right = () => {
  return (
    <div className="w-[70%] h-full bg-slate-800 text-white">


      <ChatUser />

      <div className="py-2 flex-ankit overflow-y-auto" style={{ maxHeight: "calc(99vh - 20vh)" }}>
        <Messages />
      </div>
      <Type />
    </div>
  )
}

export default Right
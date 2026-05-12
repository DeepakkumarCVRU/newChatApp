
const ChatUser = () => {
  return (
    <>
      <div className="flex space-x-5 h-[10vh] items-center px-5 py-2 bg-gray-600 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>

        <div>
          <h1 className="text-xl">Deepak kumar</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  )
}

export default ChatUser
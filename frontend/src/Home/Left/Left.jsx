import Search from "./Search"
import Users from "./Users"

const Left = () => {
  return (
    <div className="w-[30%] h-full  bg-slate-500 text-white overflow-y-scroll" >
        <h1 className="font-bold text-2xl  px-11">Chat</h1>
        <Search />
      

      <hr />
     
      <Users />
      
    </div>
  )
}

export default Left
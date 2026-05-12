import Search from "./Search"
import User from "./user"

const Left = () => {
  return (
    <div className="w-[30%] h-full  bg-slate-500 text-white overflow-y-scroll" >
        <h1 className="font-bold text-2xl  px-11">Chat</h1>
        <Search />
      

      <hr />
     
      <User />
      
    </div>
  )
}

export default Left
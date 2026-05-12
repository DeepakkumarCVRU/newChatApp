import { CiLogout } from "react-icons/ci";

function LogOut() {
    return (
        <div className="w-[3%] flex flex-col justify-end ">
            <button
                className=" w-10 h-10  border flex items-center justify-center rounded-full 
                            hover:bg-slate-900 hover:ease-initial hover:duration-300 cursor-pointer">
                
                <CiLogout />
            </button>
        </div>
    );
}

export default LogOut;

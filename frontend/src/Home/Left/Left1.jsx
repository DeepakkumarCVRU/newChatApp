import axios from "axios";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";

function LogOut() {


    // const [loading , setLoading] = useState(false);
    const [  setLoading] = useState(false);

    const hadleLogOut = async ()=>{
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:3001/user/logout")
            console.log(response)
            localStorage.removeItem("messanger");
            Cookies.remove("token");
            setLoading(false)
            alert("logout successful")
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div className="w-[3%] flex flex-col justify-end ">
            <button
            onClick={hadleLogOut}
                className=" w-10 h-10  border flex items-center justify-center rounded-full 
                            hover:bg-slate-900 hover:ease-initial hover:duration-300 cursor-pointer">
                
                <CiLogout  />
            </button>
        </div>
    );
}

export default LogOut;

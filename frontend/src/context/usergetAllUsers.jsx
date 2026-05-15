import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios"



const userGetAllUsers = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const getAllUsers = async () => {
            setLoading(true);
            try {
                const token = Cookie.get("token");
                console.log("this is token from cookie " , token)
                const response = await axios.get("http://localhost:3001/user/getUserprofile", {
                    withCredentials:true,
                    
                })

                setAllUsers(response.data);
                setLoading(false);

            } catch (error) {
                console.log(error);
            }
        }

        getAllUsers();
    }, [])

    return [allUsers, loading];
};

export default userGetAllUsers
import { useContext } from "react";
import authContext from "./createContext";


const useAuth = ()=> useContext(authContext);

export default useAuth;

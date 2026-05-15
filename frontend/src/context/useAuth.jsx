import { useContext } from "react";
import { AuthContext } from "./createContext";

// custom hook
export const useAuth = () => {
    return useContext(AuthContext);

};
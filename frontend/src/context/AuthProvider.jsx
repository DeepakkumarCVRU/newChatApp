import { useState } from "react";
import Cookie from "js-cookie";
import authContext from "./createContext";


export const AuthProvider = ({ children }) => {
  const initialUserState = Cookie.get("token") || localStorage.getItem("messanger");

  //parse the user data and storing in state
  const [authUser, setAuthUser] = useState(
        initialUserState ? JSON.parse(initialUserState) : undefined,
  );

  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  )
};

// export const useAuth = ()=> useContext(authContext);

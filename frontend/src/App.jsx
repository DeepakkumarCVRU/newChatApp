import { Navigate, Route, Routes } from "react-router-dom";
import SingIn from "./components/SingIn"
import SingUp from "./components/SingUp"
import Left from "./Home/Left/Left"
import LogOut from "./Home/Left/Left1"
import Right from "./Home/Right/Right"
import { useAuth } from "./context/useAuth";

function App() {

  const {authUser} = useAuth();


  return (
    <>

      <Routes>
        <Route path="/" element={
          authUser ? (<div className="flex h-screen ">
            <LogOut />
            <Left />
            <Right />
          </div> ) : ( <Navigate to={"/login"}/> )
        } />

        <Route path="/login" element={authUser? <Navigate to ={"/"} /> : <SingIn />} />
        <Route path="/signUp" element={authUser? <Navigate to ={"/"} /> : <SingUp />} />
      </Routes>

    </>
  )
}

export default App

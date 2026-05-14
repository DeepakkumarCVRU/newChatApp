import SingIn from "./components/SingIn"
import SingUp from "./components/SingUp"
import useAuth from "./context/useAuth"; 
// import Left from "./Home/Left/Left"
// import LogOut from "./Home/Left/Left1"
// import Right from "./Home/Right/Right"


function App() {

      const [authUser , setAuthUser] = useAuth();

      console.log(authUser)

  return (
    <>
    {/* <div className="flex h-screen ">
      <LogOut/>
      <Left/>
        <Right/>
    </div> */}
  
  <SingUp/>
  <SingIn/>
 
    </>
  )
}

export default App

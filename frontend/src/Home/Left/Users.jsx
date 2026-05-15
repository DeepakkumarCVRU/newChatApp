import User from "./user"
import userGetAllUsers from "../../context/usergetAllUsers"

const Users = () => {

  const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers, loading)
  return (
        <div className="">
      

      {
        allUsers.map((user, index) => {
          return <User key={index} user={user} />;
        })
      }
      
      
    </div>
  )
}

export default Users
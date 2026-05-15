import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
const SingIn = () => {
  const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // this is code which i dont understand right now , all context code i dont understand Ok
    // const [authUser , setAuthUser] = useAuth();
    const { authUser, setAuthUser } = useAuth();

    console.log(authUser)

   const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
        console.log(userInfo);

        try {
            const res = await axios.post(
                "http://localhost:3001/user/login", 
                userInfo,
                {
                  withCredentials: true
                }
            );
            
            alert("Login Successful! ");

            localStorage.setItem("messanger", JSON.stringify(res.data.user));

            // this is code which i dont understand right now , all context code i dont understand Ok
            setAuthUser(res.data.user)
            console.log(res.data.user);

        } catch (error) {
          console.log("Login Failed! Wrong username or password");
            console.log(error.response?.data);
        }
    };

  return (
    <div>
      <form
        action=""
        className=" h-screen flex flex-col items-center justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <p className="text-3xl font-light my-2">Sign In</p>
        </div>
        <div className="border space-y-3 p-5 rounded-2xl ">
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              className="border inline px-3 py-2 rounded-2xl text-white  w-75"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />
            <span className="text-red-500 mx-5">
                {errors.email && <span>This field is required</span>}
            </span>
          </div>
          <div className="flex flex-col ">
            <input
              type="password"
              name="password"
              id="password"
              className="border inline px-3 py-2 rounded-2xl text-white  w-75"
              placeholder="Enter Your PassWord"
              {...register("password", { required: true })}
            />
            <span className="text-red-500 mx-5">
                {errors.password && <span>This field is required</span>}
            </span>
          </div>

          <div>
            <input type="submit" value="Sign In" className="border border-blue-500 text-center px-4 py-2 bg-blue-600 cursor-pointer rounded-2xl w-full"/>
          </div>

          <span>Don't have an account? <Link to = "/signup" className="text-yellow-700"> Sign Up</Link></span>
        </div>
      </form>
    </div>
  );
};

export default SingIn;

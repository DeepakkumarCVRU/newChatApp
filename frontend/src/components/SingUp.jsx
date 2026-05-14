import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../context/useAuth";

const SingUp = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    // this is code which i dont understand right now , all context code i dont understand Ok
    const [authUser , setAuthUser] = useAuth();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        };
        console.log(userInfo);

        try {
            const res = await axios.post(
                "http://localhost:3001/user/signup", userInfo,
            );
            
            alert("singUp Successful! You can log In ");

            localStorage.setItem("messanger", JSON.stringify(res.data.user));

            // this is code which i dont understand right now , all context code i dont understand Ok
            setAuthUser(res.data.user)
            console.log(res.data.user);

        } catch (error) {
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
                    <p className="text-3xl font-light my-2">Sign Up</p>
                </div>
                <div className="border space-y-3 p-5 rounded-2xl ">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="border inline px-3 py-2 rounded-2xl text-white w-75 "
                            placeholder="Enter Your Name"
                            {...register("name", { required: true })}
                        />
                        <span className="text-red-400 mx-5">
                            {errors.name && <span>This field is required</span>}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border inline px-3 py-2 rounded-2xl text-white  w-75"
                            placeholder="Enter Your Email"
                            {...register("email", { required: true })}
                        />
                        <span className="text-red-400 mx-5">
                            {errors.email && <span>This field is required</span>}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="border inline px-3 py-2 rounded-2xl text-white  w-75"
                            placeholder="Enter Your PassWord"
                            {...register("password", { required: true })}
                        />
                        <span className="text-red-400 mx-5">
                            {errors.password && <span>This field is required</span>}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="border inline px-3 py-2 rounded-2xl text-white w-75"
                            placeholder="Enter Your Confirm PassWord"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => value === getValues("password") || "Password do not match",
                            })}
                        />
                        <span className="text-red-400 mx-5">
                            {errors.confirmPassword && (
                                <span>confirm password not match</span>
                            )}
                        </span>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className="border border-blue-500 text-center px-4 py-2 bg-blue-600 cursor-pointer rounded-2xl w-full"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SingUp;

import { create_Token } from "../jwt/generateToken.js";
import User from "../model/user.model.js";
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser";


export const SignUp = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        console.log(name, email, password, confirmPassword)

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match" });
        }

        const Userdata = await User.findOne({ email });

        if (Userdata) {
            return res.status(400).json({ message: "User already exists" });
        }

        //hasing the password 

        const hashPassword = await bcrypt.hash(password, 10)




        const newUser = new User({ name, email, password: hashPassword });
        await newUser.save()


        const user = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }

        res.status(201).json({ Message: "new user created successfully", user });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const Userdata = await User.findOne({ email })
        if (!Userdata) {
            return res.status(400).json({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, Userdata.password)


        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" })
        }

        const token = create_Token_And_Save_Cokkie(Userdata._id)

        // save token in cokkie 

        res.cookie("token", token, {
            httpOnly: true,   // prevent client side XSS 
            secure: true,
            sameSite: "Strict"  // prevent client side CSRF
        })

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: Userdata._id,
                name: Userdata.name,
                email: Userdata.email
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

// you have to write better code for logout
export const LogOut = async (req, res) => {
    try {
        res.clearCookie("token")
        res.status(200).json({ message: "Logout successful" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}
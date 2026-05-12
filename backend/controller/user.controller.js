import User from "../model/user.model.js";
import bcrypt from "bcrypt"


export const SignUp = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Password do not match" });
        }

        const Userdata = await User.findOne({ email });
        console.log(Userdata)
        if (Userdata) {
            return res.status(400).json({ message: "User already exists" });
        }

        //hasing the password 

        const hashPassword = await bcrypt.hash(password, 10)


        const newUser = new User({ name, email, password: hashPassword });
        await newUser.save()

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}


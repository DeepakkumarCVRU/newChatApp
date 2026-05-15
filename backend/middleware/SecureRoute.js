import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const SecureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded) {
            return res
                .status(401)
                .json({ message: "you dont have a valid token || Unauthorized" });
        }


        const user = await User.findById(decoded.UserId, { password: 0 });
        if (!user) {
            return res.status(401).json({ message: "User Not found" });
        }
        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

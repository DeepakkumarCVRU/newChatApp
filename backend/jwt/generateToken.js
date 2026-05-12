import jwt from "jsonwebtoken"


export const create_Token_And_Save_Cokkie = (UserId) => {

    const token = jwt.sign({ UserId }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
    return token
}
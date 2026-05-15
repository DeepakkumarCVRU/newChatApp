import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import ConnectDB from "./db/ConnectDB.js"
import router from "./routes/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"


dotenv.config()


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))  // enable cors for all routes

ConnectDB()
const PORT = process.env.PORT || 3000

app.use("/user", router)

app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
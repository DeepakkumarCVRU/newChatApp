import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import ConnectDB from "./db/ConnectDB.js"
import router from "./routes/user.route.js"


dotenv.config()


const app = express()
app.use(express.json())
ConnectDB()
const PORT = process.env.PORT || 3000

app.use("/user", router)

app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
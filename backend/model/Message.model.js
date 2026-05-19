import mongoose from "mongoose";
import User from "./user.model.js";

const messageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    message: {
        type: String,
        required: true,
        maxlength: 1000,
        trim: true,
        validate: [
            {
                validator: (value) => value.length > 0,
                message: "Message cannot be empty"
            }
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


const Message = mongoose.model("Message", messageSchema);
export default Message;
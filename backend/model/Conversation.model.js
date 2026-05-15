import mongoose from "mongoose";
import Message from "./Message.model.js";
import User from "./user.model.js";


const conversationSchema = mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            // required: true
        },
    ],

    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Message,
            // required: true,
            default: []
        }
    ]

}, { timestamps: true });


const Conversation = mongoose.model("conversation", conversationSchema);
export default Conversation;
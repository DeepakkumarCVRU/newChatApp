import Conversation from "../model/Conversation.model.js";
import Message from "../model/Message.model.js";

export const sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const receiverId = req.params.id;  // this id is reciver id
        const senderId = req.user._id; // current LoggedIn user

        let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });


        if (!conversation) {
            conversation = await Conversation.create(
                {
                    participants: [senderId, receiverId]
                })

            const newMessage = await Message({
                senderId,
                receiverId,
                message
            })

            if (newMessage) {
                await newMessage.save();
                conversation.message.push(newMessage._id);
                await conversation.save();
            }
            console.log("conversation created and message saved",)
            // await Promise.all([conversation.save(), newMessage.save()]);
            res.status(200).json({ message: "Message sent successfully", newMessage });
        } else {
            console.log("conversation found")
            const newMessage = await Message({
                senderId,
                receiverId,
                message
            })

            if (newMessage) {
                await newMessage.save();
                conversation.message.push(newMessage._id);
                await conversation.save();
            }

            res.status(200).json({ message: "Message sent successfully to existing conversation ", newMessage });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }




}
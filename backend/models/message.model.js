import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        receiverrId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        message:{
            type:String,
            required:true,
        }

    },
    {timestamps:true}//createdAt,updatedAt
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
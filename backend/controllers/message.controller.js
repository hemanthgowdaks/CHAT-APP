export const sendMessage = async (req,res)=>{
    try {
        const { message } = req.body
        console.log("message is ",message)
        const{ id: receiverId } = req.params
        const senderId = req.user._id


    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error: "Internal server error"})
        
    }
}
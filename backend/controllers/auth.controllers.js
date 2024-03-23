export const signup = async (req,res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            res.status(400).json({error:"Password don't match"})
        }

        const user = User.findOne({username})
        
        if(user){
            res.status(400).json({error:"username already exists"})
        }

        //HASH password here

        

    } catch(error){

    }
    
}

export const login = (req,res) => {
    res.send("login")
}

export const logout = (req,res) => {
    res.send("logout")
}
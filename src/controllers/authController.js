import loginUser from '../services/authService.js';
import registerUser from '../services/authService.js';
import generateToken from '../utils/jwtUtils.js';



export const loginController = async (req, res) =>{
    const {username,password}=req.body;
    try{
        const token = await loginUser(username,password);
        const accessToken = await generateToken({ username });
        res.json({ token: accessToken });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const registerController = async (req, res) =>{
    const { username, password } = req.body;
    try {
        const newUser = await registerUser(username, password);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



import userCrud from "../Utils/Crud/userCrud.js";
import hashFunction from "../Utils/hashUtils.js";

async function editProfile_post(req,res){
    const { email,username, password,interest} = req.body;
    const updatedData = req.body;
    const currentProfile = res.locals.user;
    let hashedpassword = await hashFunction(password);
    try{
        if(currentProfile){
           await userCrud.updateUser(currentProfile.username,currentProfile.password,email,username,hashedpassword,interest);
           res.status(200).json({ message: 'Data pengguna berhasil diperbarui', updatedData });
           
           return;
        }else{
            console.log("User tidak ditemukan");
        }
    }catch(err){
        console.log(err);
    }
}

export default editProfile_post;
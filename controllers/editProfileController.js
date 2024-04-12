import userCrud from "../Utils/Crud/userCrud.js";

async function editProfile_post(req,res){
    const { email,username, password,interest} = req.body;
    try{
        const fetchedUser = await userCrud.fetchOne(email,password);
        if(fetchedUser){
           await userCrud.updateUser(email,username,password,interest);
        }else{
            console.log("User tidak ditemukan");
        }
    }catch(err){
        console.log(err);
    }
}

export default editProfile_post;
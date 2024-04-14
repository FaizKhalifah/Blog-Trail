import userCrud from "../Utils/Crud/userCrud.js";

async function addBlog(){
    const userBlog = await fetchBlog();
    res.json({userBlog});
}
async function getUserInfo(req,res){
    const user = res.locals.user;
    res.json({ user: user, message: 'User data retrieved successfully' });
}
export default getUserInfo;
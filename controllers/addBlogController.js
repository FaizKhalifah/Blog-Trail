import authMiddleware from "../middlewares/authMiddleware.js";
async function addBlogController(){

}

async function getUserInfo(req,res){
    const user = res.locals.user;
    res.json({ user: user, message: 'User data retrieved successfully' });
}
export default getUserInfo;
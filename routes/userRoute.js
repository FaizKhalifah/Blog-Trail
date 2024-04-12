import { Router } from "express";
import editProfile_post from "../controllers/editProfileController.js";

const userRouter = Router();
userRouter.post('/editProfile',editProfile_post);

export default userRouter;
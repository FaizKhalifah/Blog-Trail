import { Router } from "express";
import authController from "../controllers/authController.js";

const router = Router();

router.get('/register',authController.signUp_get);
router.post('/register',authController.signUp_post);
router.get('/signIn',authController.login_get);
router.post('/signIn',authController.signUp_post);

export default router;
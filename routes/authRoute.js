import { Router } from "express";
import {signup_get,signup_post,login_get,login_post} from "../controllers/authController.js";

const router = Router();
router.get('/register',signup_get);
router.post('/register',signup_post);
router.get('/login',login_get);
router.post('/login',login_post);

export default router;
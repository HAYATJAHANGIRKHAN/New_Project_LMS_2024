import { Router } from "express";
import { getProfile, login, logout, register } from "../controllers/user.controller";

const router = Router();
router.post('/register', upload.single('avatar'),register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/me', getProfile);


export default router;
import { Router } from "express";

const router = Router();
router.post('/register', register);
router.post('/login', login);
router.post('/logout', register);
router.post('/me', getProfile);


export default router;
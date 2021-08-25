import { Router } from 'express';
import { signUp, signIn, getUserInfo } from '../controllers/users.js';
import verifyToken from '../middlewares/verifyToken.js';

const userRouter = Router();

userRouter.post('/signup', signUp);
userRouter.post('/signin', signIn);
userRouter.get('/me', verifyToken, getUserInfo);

export default userRouter
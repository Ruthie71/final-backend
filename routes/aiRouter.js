import { Router } from 'express';
import { aiCompletion, aiSummary } from '../controllers/ai.js';
import verifyToken from '../middlewares/verifyToken.js';

const languagesRouter = Router();


languagesRouter.post('/completion',verifyToken, aiCompletion);
languagesRouter.post('/summerize',verifyToken, aiSummary);

export default languagesRouter
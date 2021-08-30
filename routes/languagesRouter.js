import { Router } from 'express';
import { getAllLanguages, getSingleLanguage } from '../controllers/languages.js';

const languagesRouter = Router();

languagesRouter.get('/', getAllLanguages);
languagesRouter.get('/:id', getSingleLanguage);

export default languagesRouter


import { Router } from 'express';
import { getAllPersonalskills, getSinglePersonalskill } from '../controllers/personalskills.js';

const personalSkillsRouter = Router();

personalSkillsRouter.get('/', getAllPersonalskills);
personalSkillsRouter.get('/:id', getSinglePersonalskill);

export default personalSkillsRouter
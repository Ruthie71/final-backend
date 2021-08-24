import { Router } from 'express';
import { getAllTechskills, getSingleTechskill } from '../controllers/techskills.js';

const techSkillsRouter = Router();

techSkillsRouter.get('/', getAllTechskills);
techSkillsRouter.get('/:id', getSingleTechskill);

export default techSkillsRouter
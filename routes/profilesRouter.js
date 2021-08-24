import { Router } from 'express';
import { getSingleProfile, createNewProfile, updateProfile } from '../controllers/profiles.js';
import validateJOI from '../middlewares/validateJOI.js'
import {profileBody} from '../joi/schemas.js'

const profilesRouter = Router();

// profilesRouter.get('/', getAll);
profilesRouter.get('/:id', getSingleProfile);
profilesRouter.post('/', validateJOI(profileBody), createNewProfile);
profilesRouter.put('/:id', validateJOI(profileBody), updateProfile);

export default profilesRouter
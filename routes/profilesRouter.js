import { Router } from 'express';
import { getSingleProfile, createNewProfile, updateProfile } from '../controllers/profiles.js';
import validateJOI from '../middlewares/validateJOI.js'
import {profileBody} from '../joi/schemas.js'
import verifyToken from '../middlewares/verifyToken.js';

const profilesRouter = Router();

profilesRouter.get('/:id',verifyToken, getSingleProfile);
profilesRouter.post('/', validateJOI(profileBody), verifyToken, createNewProfile);
profilesRouter.put('/:id', validateJOI(profileBody), verifyToken, updateProfile);

export default profilesRouter
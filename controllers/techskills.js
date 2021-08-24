import Techskill from '../models/Techskill.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllTechskills = asyncHandler(async (req, res) => {
    const resources = await Techskill.find();
    res.json(resources);
});

export const getSingleTechskill = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const _id = id;
    const resource = await Techskill.findById({ _id });
    if (!resource)
        throw new ErrorResponse(`skill with id of ${id} not found`, 404);
    res.json(resource);
});
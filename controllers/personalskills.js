import Personalskill from '../models/Personalskill.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPersonalskills = asyncHandler(async (req, res) => {
    const resources = await Personalskill.find();
    res.json(resources);
});

export const getSinglePersonalskill = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const _id = id;
    const resource = await Personalskill.findById({ _id });
    if (!resource)
        throw new ErrorResponse(`message with id of ${id} not found`, 404);
    res.json(resource);
});
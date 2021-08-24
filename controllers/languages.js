import Language from '../models/Language.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllLanguages = asyncHandler(async (req, res) => {
    const resources = await Language.find();
    res.json(resources);
});

export const getSingleLanguage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const _id = id;
    const resource = await Language.findById({ _id });
    if (!resource)
        throw new ErrorResponse(`skill with id of ${id} not found`, 404);
    res.json(resource);
});
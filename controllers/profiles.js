import Profile from '../models/Profile.js';
import User from "../models/user.js";
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getSingleProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const profile = req.body;
    const { _id: user } = req.user;
    profile.user = user
    const findProfile = await Profile.findById(id);
    if (!findProfile) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    res.json(findProfile);
});

export const createNewProfile = asyncHandler(async (req, res) => {
    const profile = req.body
    const { _id: user } = req.user;
    const findUser = await Profile.findOne({ user });
    if(findUser && user.toString(2)==findUser.user.toString(2))throw new ErrorResponse('Profile already exists');
    profile.user = user
    if (!profile)
        throw new ErrorResponse('...are required fields');
    const newProfile = await Profile.create(
        profile
    );
    await User.findOneAndUpdate(
        {_id: user},
        {profile: newProfile._id }
    )
    res.status(201).json(newProfile);
});

export const updateProfile = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { id } = req.params;
    const profile = req.body;
    const { _id: user } = req.user;
    profile.user = user
    const findProfile = await Profile.findById(id);
    if (!findProfile) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    const updatedProfile = await Profile.findOneAndUpdate(
        { _id: id },
        profile,
        { new: true }
    );
    res.json(updatedProfile);
});

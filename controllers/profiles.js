import Profile from '../models/Profile.js';
import User from "../models/user.js";
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getSingleProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const post = await Profile.findById(id);
    if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    res.json(post);
});

export const createNewProfile = asyncHandler(async (req, res) => {
    const profile = req.body
    console.log(profile)
    if (!profile)
        throw new ErrorResponse('...are required fields');
    const newProfile = await Profile.create(
        profile
    );
    
    res.status(201).json(newProfile);
});

export const updateProfile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const profile = req.body;
    console.log(profile)
    const findProfile = await Profile.findById(id);
    if (!findProfile) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    // if (String(post.author) !== String(author))
    //     throw new ErrorResponse(`Cannot edit another user's posts`, 401);
    const updatedProfile = await Profile.findOneAndUpdate(
        { _id: id },
        profile,
        { new: true }
    );
    res.json(updatedProfile);
});


// {
//     user: "shghcsfghjfhg",
//     address: {
//         city: "Berlin",
//         street: "Muster Str",
//         housenr: 36,
//         zipcode: 10245,
//         country: "Germany"
//     },
//     contact: {
//         phone: 01759860126,
//         email: "alexandru.ciripoi@gmail.com",
//         git: "github.com/alexandruciripoi",
//         linkedin: "linkedin.com/alexandruciripoi",
//     },
//     details: {
//         dateofbirth: 01.07.1988
//         jobtitle: "Fullstack Developer"
//     },
//     personalskills: ["problem soving", "Strategy"],
//     personalstatement: "Some stuff aabout me",
//     education: [{coursename: "",  startdate: "", finishdate: "", academicinstitution: "", location: "", coursecontent: ""}],
//     languages: ["english", "german"],
//     work: [{jobtitle: "", startdate: "", finishdate: "", companyname: "", location:"", keyachievements:""}],
//     techskills: ["JS", "CSS"]
// }
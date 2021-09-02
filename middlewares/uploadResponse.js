  
import ErrorResponse from '../utils/ErrorResponse.js';
import Profile from '../models/Profile.js';
import asyncHandler from './asyncHandler.js';

const uploadResponse = asyncHandler(async(req, res, next) => {
  console.log(req.user.profile._id)
  const { file, fileValidationError, protocol } = req;
  const host = req.get('host');
  if (!file) throw new ErrorResponse('Please upload one picture', 400);
  if (fileValidationError) throw new ErrorResponse(fileValidationError, 400);
  const location = process.env.AWS_BUCKET
    ? req.file.location
    : `${protocol}://${host}/uploads/${file.filename}`;
 req.profilePicture = location
 await Profile.findOneAndUpdate(
  {_id: req.user.profile._id},
  {photo: location }
)
res.send(location)
//  next()
});

export default uploadResponse;
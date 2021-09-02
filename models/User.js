import mongoose from 'mongoose';
const {
  Schema,
  model,
  Types: { ObjectId }
} = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
    profile: { type: ObjectId, ref: "Profile" },
    password: { type: String, required: true, select: false }
  });


const User = mongoose.models.User || model('User', userSchema);

export default User;
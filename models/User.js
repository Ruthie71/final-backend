import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false }
  });


const User = mongoose.models.User || model('User', userSchema);

export default User;
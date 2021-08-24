import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const languagesSchema = new Schema({
 name: {type: String, required: true}
});

const language = mongoose.models.Language || model('Languages', languagesSchema);

export default language;
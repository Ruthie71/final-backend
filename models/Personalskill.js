import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const personalSkillsSchema = new Schema({
 name: {type: String, required: true}
});

const personalSkill = model('Personalskill', personalSkillsSchema);

export default personalSkill;
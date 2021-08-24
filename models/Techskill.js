import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const techSkillsSchema = new Schema({
 name: {type: String, required: true}
});

const techSkill = model('Techskills', techSkillsSchema);

export default techSkill;
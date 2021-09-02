import mongoose from 'mongoose';
const {
  Schema,
  model,
  Types: { ObjectId }
} = mongoose;

const addressSchema = new Schema({
  city: {type:String},
  street: {type:String},
  housenr: {type:String},
  zipcode: {type:String},
  country: {type:String},
})

const contactSchema = new Schema({
  phone: {type:String},
  email: {type:String},
  git: {type:String},
  linkedin: {type:String}
})

const detailsSchema = new Schema({
  dateofbirth: {type:String},
  jobtitle: {type:String}
})

const educationSchema = new Schema({
  coursename: {type:String},
  startdate: {type:String},
  finishdate: {type:String},
  academicinstitution: {type:String},
  location: {type:String},
  coursecontent: {type:String}
})

const workSchema = new Schema({
  jobtitle: {type:String},
  startdate: {type:String},
  finishdate: {type:String},
  companyname: {type:String},
  location: {type:String},
  keyachievements: {type:String}
})

const profileSchema = new Schema({
    user: { type: ObjectId, required: true, ref: 'User' },
    firstname: { type: String },
    lastname: { type: String },
    address: addressSchema,
    contact: contactSchema,
    details: detailsSchema,
    personalskills: [{type: ObjectId, ref: 'Personalskill'}],
    personalstatement:  { type: String },
    photo:  { type: String },
    education: [educationSchema],
    languages: [{type: ObjectId, ref: 'Language'}],
    work: [workSchema],
    techskills: [{type: ObjectId, ref: 'Techskill'}],
  });

const Profile = model('Profile', profileSchema);

export default Profile;


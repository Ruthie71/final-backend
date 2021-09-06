import Joi from 'joi';


const addressJoi = Joi.object().keys({
    _id: Joi.string().allow(''),
    city: Joi.string().allow(''),
    street: Joi.string().allow(''),
    housenr: Joi.string().allow(''),
    zipcode: Joi.string().allow(''),
    country: Joi.string().allow(''),
})

const contactJoi = Joi.object().keys({
    _id: Joi.string().allow(''),
    phone: Joi.string().allow(''),
    email: Joi.string().email().allow(''),
    git: Joi.string().allow(''),
    linkedin: Joi.string().allow('')
})

const detailsJoi = Joi.object().keys({
    _id: Joi.string().allow(''),
    dateofbirth: Joi.string().allow(''),
    jobtitle: Joi.string().allow('')
})

const educationJoi = Joi.object().keys({
        coursename: Joi.string().allow(''),
        startdate: Joi.string().allow(''),
        finishdate: Joi.string().allow(''),
        academicinstitution: Joi.string().allow(''),
        location: Joi.string().allow(''),
        coursecontent:Joi.string().allow('')
    })


const workJoi = Joi.object().keys({
        jobtitle: Joi.string().allow(''),
        startdate: Joi.string().allow(''),
        finishdate: Joi.string().allow(''),
        companyname: Joi.string().allow(''),
        location: Joi.string().allow(''),
        keyachievements: Joi.string().allow('')
    })




export const profileBody = Joi.object().keys({
    _id: Joi.string().allow(''),
    user: Joi.string().allow(''),
    firstname: Joi.string().allow(''),
    lastname: Joi.string().allow(''),
    address: addressJoi,
    contact: contactJoi,
    details: detailsJoi,
    personalskills: Joi.array(),
    personalstatement: Joi.string().allow(''),
    photo: Joi.string().allow(''),
    education: Joi.array().items(educationJoi),
    languages: Joi.array(),
    work: Joi.array().items(workJoi),
    techskills: Joi.array(),
});


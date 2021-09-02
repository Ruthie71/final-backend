import Joi from 'joi';


const addressJoi = Joi.object().keys({
    city: Joi.string(),
    street: Joi.string(),
    housenr: Joi.string(),
    zipcode: Joi.string(),
    country: Joi.string(),
})

const contactJoi = Joi.object().keys({
    phone: Joi.number(),
    email: Joi.string().email(),
    git: Joi.string(),
    linkedin: Joi.string()
})

const detailsJoi = Joi.object().keys({
    dateofbirth: Joi.string(),
    jobtitle: Joi.string()
})

const educationJoi = Joi.array().items(
    Joi.object({
        coursename: Joi.string(),
        startdate: Joi.string(),
        finishdate: Joi.string(),
        academicinstitution: Joi.string(),
        location: Joi.string(),
        coursecontent:Joi.string()
    })
)

const workJoi = Joi.array().items(
    Joi.object({
        jobtitle: Joi.string(),
        startdate: Joi.string(),
        finishdate: Joi.string(),
        companyname: Joi.string(),
        location: Joi.string(),
        keyachievements: Joi.string()
    })
)



export const profileBody = Joi.object().keys({
    user: Joi.string(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string(),
    address: addressJoi,
    contact: contactJoi,
    details: detailsJoi,
    personalskills: Joi.array(),
    personalstatement: Joi.string(),
    photo: Joi.string(),
    education: educationJoi,
    languages: Joi.array(),
    work: workJoi,
    techskills: Joi.array(),
});

/* 
  const profile = {
        user,
        address: {
            city,
            street,
            housenr,
            zipcode,
            country
        },
        contact: {
            phone,
            email,
            git,
            linkedin
        },
        details: {
            dateofbirth,
            jobtitle 
        },
        personalskills: [],
        personalstatement: "",
        education: [],
        languages: [],
        work: [],
        techskills: []
    } 

*/


/* 
PUT vs PATCH

PUT updates or create: -> 

PATCH is atomic

findOneAndUpdate({_id: id}, {address, user}, {new: true })

PUT /profile/:userId/addskill
PUT /profile/:userId/removeskill

*/
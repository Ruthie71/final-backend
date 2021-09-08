import OpenAI from "openai-api";
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const openai = new OpenAI(process.env.OPEN_AI_KEY);

export const aiCompletion = asyncHandler(async (req, res) => {
    const information = req.body.values;
    const aiResponse = await openai.complete({
        engine: 'davinci',
        prompt: `A recruiter ask me:\n\"\"\"\nWhat does a ${information} do?\n\"\"\"\n I answered him, with appropriate language for a job interview: \n\"\"\"\n`,
        maxTokens: 30,
        temperature: 0.5,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        stop:["\"\"\""]
    })
    if (!aiResponse)
        throw new ErrorResponse('No Response from OpenAI', 404);
    res.json(aiResponse.data);
});


export const aiSummary = asyncHandler(async (req, res) => {
    const information = req.body;
    const techSkills =  information.techskills.map(skill => skill.name);
    const promptAI = `My name is ${information.firstname} ${information.lastname}. I was born in ${information.details.dateofbirth.substring(0, 4)}. I studied ${information.education[0].coursename} at ${information.education[0].academicinstitution} from ${information.education[0].startdate.substring(0, 4)} to ${information.education[0].finishdate.substring(0, 4)}. I worked as ${information.work[0].jobtitle} at ${information.work[0].companyname} from ${information.work[0].startdate.substring(0, 4)} to ${information.work[0].finishdate.substring(0, 4)}. I have programing experience in ${techSkills}. `
    const aiResponse = await openai.complete({
        engine: 'davinci',
        prompt:`A senior web developer asked me to describe myself:\n\"\"\"\n${promptAI}.\n\"\"\"\nI rephrased it for him, with appropriate language for a job interview:\n\"\"\"\n`,
        temperature: 0.5,
        max_tokens:100,
        top_p:1.0,
        frequency_penalty:0.0,
        presence_penalty:0.0,
        stop:["\"\"\""]
    })
    console.log(aiResponse)
    if (!aiResponse)
        throw new ErrorResponse('No Response from OpenAI', 404);
    res.json(aiResponse.data);
});

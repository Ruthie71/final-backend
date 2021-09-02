import OpenAI from "openai-api";
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const openai = new OpenAI(process.env.OPEN_AI_KEY);

export const aiCompletion = asyncHandler(async (req, res) => {
    const { prompt } = req.body;
    const aiResponse = await openai.complete({
        engine: 'davinci',
        prompt,
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        stop: ['.']
    })
    if (!aiResponse)
        throw new ErrorResponse('No Response from OpenAI', 404);
    res.json(aiResponse.data);
});


export const aiSummary = asyncHandler(async (req, res) => {
    const person = req.body.person;
    const text = req.body.text;
    const aiResponse = await openai.complete({
        engine: 'davinci',
        prompt:`My ${person} asked me what this passage means:\n\"\"\"\n${text}.\n\"\"\"\nI rephrased it for him, in plain language ${person} can understand:\n\"\"\"\n`,
        temperature: 0.5,
        max_tokens:60,
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

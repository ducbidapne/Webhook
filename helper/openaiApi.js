//const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

require('dotenv').config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const chatCompletion = async (prompt) => {
 try{
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return {
    status: 1,
    response: text
  };
 } catch (error) {
    console.error(error);
    return {
      status: 0,
      response: 'Please check api key.'
    };
  }
 
 
};


module.exports = {
  chatCompletion
};

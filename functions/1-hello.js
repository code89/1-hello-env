// http://localhost:8888/.netlify/functions/1-hello


const API_KEY = process.env.API_KEY


// domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: API_KEY
  }
}
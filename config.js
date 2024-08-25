const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "null", // මෙතනට SESSION_ID එක දෙන්න
MONGODB: process.env.MONGODB || "nul", // mongodb url එක දෙන්න
};

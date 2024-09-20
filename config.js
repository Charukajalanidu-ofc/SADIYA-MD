const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vTRA1KaI#86MM2_avhP3jbV1lacGqEZbtjOxKz_ZDoyJ6ycqadTg", // මෙතනට SESSION_ID එක දෙන්න
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net", // mongodb url එක දෙන්න
};

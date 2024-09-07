const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "0msmTJrD#teQpWm4dYfiWwwRve1eLSYahclmtK79OgFGgBJ4JAcA", // මෙතනට SESSION_ID එක දෙන්න
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net", // mongodb url එක දෙන්න
};

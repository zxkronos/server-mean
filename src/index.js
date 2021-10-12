
const app = require('./app');
const { dbConnection } = require('./datebase');
require('dotenv').config();

const conectarDB = async() => {
    await dbConnection();
}

conectarDB();
app.listen(process.env.PORT);
console.log('server on port',process.env.PORT);
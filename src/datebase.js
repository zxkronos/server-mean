const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos a la hora de iniciar');
    }

}

module.exports = {
    dbConnection
}

// mongoose.connect('mongodb://localhost/mean-employees',{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
//         .then((db)=> console.log('db is connected'))
//         .catch((err)=> console.log(err));
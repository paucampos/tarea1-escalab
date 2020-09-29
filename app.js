const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

// app - express
const app = express();

// Importar rutas
const userRoutes = require('./routes/user');
const tweetRoutes = require('./routes/tweet');

// conexion a db
const db = async() => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('DB connected!');
    } catch (error) {
        console.log('DB connection Error', error);
    };
}

// ejecutar conexion a db
db();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Rutas 
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);


// Port
const port = process.env.PORT || 8000;

// Listen port
app.listen(port, () => {
    console.log(`Server ..... running on port ${port}`);
});
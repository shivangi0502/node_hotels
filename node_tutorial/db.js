//this file contains the blueprint of how node.js server is connected with the mongodb server

const mongoose = require('mongoose');

//define mongodb connection url

const mongoURL = 'mongodb://localhost:27017//hotels';

//setup mongodb connection
// NEW CORRECT WAY 
mongoose.connect('mongodb://localhost:27017/your_database')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));


//monngoose maintain a default connection object which is responsible always when connecting databases

const db = mongoose.connection;

//define event listeners for database connection 
// //---- this allows us to react to different states of the database connection such as connected, error, disconnected

db.on('connected', ()=>{
    console.log("connected to mongodb server");
});


db.on('error', (err)=>{
    console.log("mongoDB connection error:", err);
});

db.on('disconnected', ()=>{
    console,log("disconnected");
});


//export the database connection
module.exports = db;

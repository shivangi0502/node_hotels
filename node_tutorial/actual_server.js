
require('dotenv').config();

const express = require('express');
//app is a map to express function or ainstance to express
const app = express();

//import the db object
const db = require('./db');


const PORT = process.env.PORT || 3000;

const passport = require('./auth');
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false});

//middleware function
const logRequest = (req, res, next)=> {
    console.log(`[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`);
    next(); //move on to the next phase
}
app.use(logRequest);



const bodyParser = require('body-parser');
app.use(bodyParser.json());



//creating menu card for the server
// using GET method to request data from the server

// '/'---if at the end of any address / is there that data will be given to the server
//req = request
//res = response --- the response the server has to send
//analogy ---- customer goes to waiter and says '/' then the waiter will tell him 'hello welcome to the hotel!! How can i help you?'



app.get('/',localAuthMiddleware, function(req,res){
    res.send('hello welcome to the hotel!! How can i help you?');
});

// app.get('/chicken', (req,res)=>{
//     res.send("yes sir we have many options for chicken to offer");
// });



//import the router files

const personRoutes = require('./routes/personRoutes');
//use the routers
app.use('/person', personRoutes);

//import the menuitem

const menuItemRoutes = require('./routes/menuItemRoutes');
const Person = require('./models/Person');
app.use('/menu', menuItemRoutes);


//assingning port number 3000 to app


app.listen(PORT, ()=>{
    console.log("listening on port 3000");
});
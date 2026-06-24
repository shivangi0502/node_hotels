const passport = require('passport');
const localStrategy = require('passport-local').Strategy; //local strategy ---- it is an authentication strategy that uses username and password for verification

const Person = require('./models/Person');

passport.use(new localStrategy(async (USERNAME,password, done)=> { //done is the callback function ehich takes in 3 parameters(error,user,info)
    //authentication logic
    try{
        console.log('recieved credentials:', USERNAME, password);
        const user = await Person.findOne({username:USERNAME});
        if(!user)
            return done(null, false, {message: 'Incorrect username'});
        const isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch){
            return done(null,user);
        }else{
            return done(null, false, {message: 'Incorrect password'});
        }

    }catch(err){
        return done(err);
    }
}));

module.exports = passport;
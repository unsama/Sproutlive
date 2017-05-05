var passport = require("passport");
var User = require("../models/user");
var LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('local.register', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function (req, username, password, done) {
        var messages = [];
        // req.check('con_password', 'Invalid Confirm Password').equals(req.body.password);
        req.check('email', 'Invalid Email').isEmail();
        req.check('username', 'Invalid Username').isLength({min: 5, max: 35});
        req.check('password', 'Invalid Password').isLength({min: 5, max: 35});
        // req.check('full_name', 'Invalid Full Name').isLength({min: 3, max: 35});
        // req.check('gender', 'Requried Gender').notEmpty().isLength({max: 6});
        // req.check('terms', 'Requried Terms').notEmpty().isLength({max: 5});

        var errors = req.validationErrors();
        if(errors){
            errors.forEach(function(error){
                messages.push(error.msg);
            });
            return done(null, false, req.flash('error', messages));
        }

        User.findOne({'username': username}, function (err, user1) {
            if (err)
                return done(err);
            if (user1)
                return done(null, false, {message: "Username is already exist!"});
            User.findOne({'email': req.body.email}, function (err, user2) {
                if (err)
                    return done(err);
                if (user2)
                    return done(null, false, {message: "Email is already exist!"});
                var newUser = new User();
                newUser.username = username;
                newUser.password = newUser.encryptPassword(password);
                newUser.email = req.body.email;
                newUser.full_name = req.body.full_name;
                newUser.gender = req.body.gender;
                newUser.terms = req.body.terms;
                newUser.save(function (err, result) {
                    if (err) {
                        return done(null, false, {message: err});
                    }
                    return done(null, newUser);
                });
            });
        });
    }
    )
);

passport.use('local.login', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, done){
        var messages = [];
        req.check('username', 'Invalid Username').notEmpty();
        req.check('password', 'Invalid Password').notEmpty();
        var errors = req.validationErrors();
        if(errors){
            errors.forEach(function(error){
                messages.push(error.msg);
            });
            return done(null, false, req.flash('error', messages));
        }

        User.findOne({'username': username}, function (err, user) {
            if (err)
                return done(err);
            if (!user)
                return done(null, false, {message: "No user found!"});
            if (!user.validPassword(password))
                return done(null, false, {message: "Wrong Password!"});
            return done(null, user);
        });
    }
    )
);
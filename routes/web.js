var express = require("express");
var router = express.Router();
var bcrypt   = require('bcrypt-nodejs');
var saltRounds = 10;
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usama4slash@gmail.com',
        pass: 'usama4slash1234'
    }
});
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "4Slash1234!@#$",
    database: "sprout"
});

connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});


/*router.get('/', function (req, res, next) {
    var cookie = req.cookies.remember;
    if(typeof cookie === "undefined"){
        res.cookie('remember', "setTheCookieValue", { maxAge: (365*24*60*60*1000), httpOnly: true });
        res.send("Set Cookie ---- ");
    }else{
        console.log(req.cookies);
        res.send("Already in Cookie ---- ");
    }
});

router.get('/clear', function(req, res, next){
    var cookie = req.cookies.remember;
    if(typeof cookie === "undefined"){
        console.log(req.cookies);
        res.send("Cookie is not Set");
    }else{
        console.log(req.cookies);
        res.cookie('remember', '', {expires: new Date(0)});
        res.send("Cookie is clear");
    }
});*/

router.get('/forgot_password', function (req, res, next) {
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: '6737pafkiet@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?'//, // plain text body
        //html: '<b>Hello world ?</b>' // html body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
            res.send("Something gose wrong!");
        }
        else {
            res.send("Message "+info.messageId+" sent: "+info.response);

        }

    });
    //  res.render('user/forgot_password', {title: 'Forgot Password', csrfToken: req.csrfToken(), emailSend: true});
});

router.get("/sales", function(req, res, next){
    res.render('modules/sales', {title: 'Sprout'});
});
router.get("/accounting", function(req, res, next){
    res.render('modules/accounting', {title: 'Sprout'});
});
router.get("/calendar", function(req, res, next){
    res.render('modules/calendar', {title: 'Sprout'});
});

router.get("/dashboards", function(req, res, next){
    res.render('modules/Dashboards', {title: 'Sprout'});
});
router.get("/expenses", function(req, res, next){
    res.render('modules/Expenses', {title: 'Sprout'});
});
router.get("/maintenance", function(req, res, next){
    res.render('modules/Maintenance', {title: 'Sprout'});
});
router.get("/timesheet", function(req, res, next){
    res.render('modules/timesheet', {title: 'Sprout'});
});
router.get("/notes", function(req, res, next){
    res.render('modules/notes', {title: 'Sprout'});
});
router.get("/repairs", function(req, res, next){
    res.render('modules/repairs', {title: 'Sprout'});
});
router.get("/inventory", function(req, res, next){
    res.render('modules/inventory', {title: 'Sprout'});
});
router.get("/manufacturing", function(req, res, next){
    res.render('modules/manufacturing', {title: 'Sprout'});
});
router.get("/leaves", function(req, res, next){
    res.render('modules/leaves', {title: 'Sprout'});
});
router.get("/employee", function(req, res, next){
    res.render('modules/employee', {title: 'Sprout'});
});
router.get("/projects", function(req, res, next){
    res.render('modules/projects', {title: 'Sprout'});
});
router.get("/attendance", function(req, res, next){
    res.render('modules/attendance', {title: 'Sprout'});
});
router.get("/test", function(req, res, next){
    res.render('modules/test', {title: 'Sprout'});
});
router.get("/recruitment", function(req, res, next){
    res.render('modules/recruitment', {title: 'Sprout'});
});
router.get("/setting", function(req, res, next){
    res.render('modules/Setting', {title: 'Sprout'});
});
router.get("/discuess", function(req, res, next){
    res.render('modules/discuess', {title: 'Sprout'});
});
router.get("/purchase", function(req, res, next){
    res.render('modules/purchase', {title: 'Sprout'});
});
router.get("/pointofsale", function(req, res, next){
    res.render('modules/Pointofsale', {title: 'Sprout'});
});


router.post('/check', function(req, res, next){
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var datetime = getDateTime();
    var token = bcrypt.hashSync(datetime, salt);
    //res.json({"data":req.body});
    var html = "";
    res.render('email_template',{token:token}, function (err, output)
    {
        html =  output ;
    });
    req.checkBody('password2','Passwords do not match.').equals(req.body.password1);
    var errors = req.validationErrors();
    // req.check('username', 'Username is required').notEmpty();
    // req.check('password', 'Password is required').isLength({min:6}).equals(req.body.confirmPassword);
    // req.check('company_name', 'company_name is required').notEmpty();
    // req.check('phone_no', 'phone_no is required').notEmpty();
    // req.check('country', 'country is required').notEmpty();
    // req.check('email', 'Email is required').isEmail();
    //
    // var errors = req.validationErrors();
    // if (errors) {
    //     res.session.errors = errors;
    //     res.session.success = false;
    // }
    // else {
    //     res.session.success = true;
    // }
    // res.redirect('/signup');
    
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'Hello USama ✔', // Subject line
        // text: 'Hello world iam Khan  ?'//, // plain text body
        html: html // html body
    };
    // res.json(req.body);
    connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`phone_no`,`country`, `password`,`user_token`,`created_at`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.phone_no+'","'+req.body.country+'","'+hash+'","'+token+'","'+datetime+'")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});

        transporter.sendMail(mailOptions, function (err, info) {
            if(err){
                console.log(err);
                res.send("Something gose wrong!");
            }
            else {
                res.send("Message "+info.messageId+" sent: "+info.response);

            }

        });
    });
    //  res.render('user/forgot_password', {title: 'Forgot Password', csrfToken: req.csrfToken(), emailSend: true});
    // connection.end();

});

/*router.get('/', function(req, res, next){
    res.render('index', {title: 'Sprout'});
});*/
router.get('/signup', function(req, res, next){
    res.render('registration', {title: 'Sprout'});
    // res.render('registration', {title: 'Sprout', success: req.session.success, errors:req.session,errors});

});
router.get('/email_temp', function(req, res, next){
    res.render('email_template', {title: 'Sprout'});
});
router.get('/password', function(req, res, next){
    res.render('password', {title: 'Sprout'});
});


module.exports = router;

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}
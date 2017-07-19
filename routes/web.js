var express = require("express");
var func = require("./../config/func");
<<<<<<< HEAD
=======
var csrf = require('csurf');
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");
<<<<<<< HEAD
var csrf = require("csurf");
=======
require("./../config/passport");
var randomstring = require("randomstring");
var database_connection = require('./db_conn');
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
var router = express.Router();
var bcrypt   = require('bcrypt-nodejs');
var saltRounds = 10;
var nodemailer = require("nodemailer");
<<<<<<< HEAD
var PDFDocument = require ("pdfkit");
var transporter = nodemailer.createTransport({
    host: 'mail.4slash.com',
    port: 25,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'info@4slash.com',
        pass: 'Info_123'

    }
    // service: 'gmail',
    // auth: {
    //     user: 'usama4slash@gmail.com',
    //     pass: 'usama4slash1234'
    // }
});


var mysql = require("mysql");
=======
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usama4slash@gmail.com',
        pass: 'usama4slash1234'
    }
});

var mysql = require("mysql");

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
var connection = mysql.createConnection({
    host: "46.101.37.156",
    user: "sprout",
    password: "sprout12345",
    database: "sprout"
});
<<<<<<< HEAD
=======





>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});
<<<<<<< HEAD
// router.use(csrf());
// router.use(function(req, res, next) {
//     res.locals._csrf = req.csrfToken();
//     next();
// });

router.post('/yo', function(req, res, next){
    connection.query("INSERT INTO test (name, age, email) VALUES ('Company Inc','545', 'Highway 37')") ;

});


=======


router.post('/yo', function(req, res, next){
    connection.query("INSERT INTO test (name, age, email) VALUES ('Company Inc','545', 'Highway 37')") ;
});

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
router.get('/clear', function (req, res, next) {
    connection.query('INSERT INTO `user`(`username`) VALUES ("hassan")', function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});

        else {
            console.log(err);
            res.send("Something goes wrong!");
        }
    });
});




<<<<<<< HEAD



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
=======
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
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

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
<<<<<<< HEAD
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
router.get("/employees", function(req, res, next){
    res.render('modules/employees', {title: 'Sprout'});
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
=======



// ---------------- ******************* ------------------------------ ************************** ------------------------------
// Azeem Ullah's Code to:
// 1. signin
// 2. session
// 3. privilege authentication
// 4. root redirect


// Destroys session
router.get('/logout', function(req, res){
    req.session.destroy();
    req.logout();
    res.redirect('/signin');
});


// Creates session and do the following:
// checks allowed apps of requested company
router.post('/create-session', function(req, res){
    req.session.db_name = req.body.db_name;
    global.connection = database_connection.connection(req.session.db_name);
    global.connection.query("select application_name from sprout_users.companies_allowed_apps where database_name ='"+req.session.db_name+"'", function (error, results) {
        if (error) {
            res.status(500).json({status: "error", message: "Error in database query while creating session."});
        }
        else{
            if(results.length > 0){
                req.session.allowed_apps = results;
                // console.log(req.session.allowed_apps[1].application_name);
                // console.log(req.session.allowed_apps.length);
                res.status(200).json("ok");
            }
            else{
                res.status(110).json({status: "error", message: "No applications registered found."});
            }
        }
        //res.json({status: "error", message: "An unidentidied error occured."});
    });
});


// signin page render
// uses csurf npm pakage and passes a csrf value generated at random
router.get('/signin', csrf(), function(req, res){
    res.render('login/index',{'message' :req.flash('message'), csrf: req.csrfToken()});
});

// signin varification
// csrf varification
// passport.js npm pakage is used
// local starategy is used in passport.js
router.post('/signin', csrf(), function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        if(error) {
            return res.status(500).json("an error occured");
        }
        if(!user) {
            return res.status(401).json("Crediantials Invalid");
        }
        req.session.user_details = user;
        req.session.username = req.body.username;
        res.status(200).json(user.id);
    })(req, res, next);
});

// route directory redirect
// if user is signed in ie. session is created then redirect to settings dashboard
// if user is not signed in then redirect to signin page
router.get('/', function(req, res, next){
    if(typeof req.session.db_name == 'undefined'){
        res.writeHead(302, {
            'Location': 'signin'
            //add other headers here...
        });
        res.end();
        //window.location = "signin";
    }
    else{
        res.writeHead(302, {
            'Location': 'setting'
            //add other headers here...
        });
        res.end();
    }
    //res.render('modules/setting', {title: 'Sprout'});
});

//global temp variable to store allowed apps list
var app_list = [];


// middleware to check all rules and authenticate user or block user.
var privilegeAuthentication = function(req, res, next) {
    //console.log(req.session.db_name);
//return true;
    if(typeof req.session.db_name == 'undefined')
        return res.render('./../views/errors/503.jade');    // 'Service Unavailable 503
    else {
        global.connection.query("select * from user where email= '"+req.session.user_details.email+"'", function (error, results) {
            if (error) {
                console.log(error);
                return res.render('./../views/errors/503.jade');
            }
            else{

                if(results.length > 0) {

                    console.log("results:" + results.length);
                    global.connection.query("select database_name from sprout_users.users_companies where user_id = (select id from sprout_users.users where email = '"+req.session.user_details.email+"' and password = '"+req.session.user_details.password+"') and status='active'", function (error2, results2) {
                        if (error2) {
                            console.log(error2);
                            return res.render('./../views/errors/503.jade');
                        }
                        else{
                            //console.log(results2);
                            if(results2.length > 0) {
                                var str = JSON.stringify(results2);
                                rows = JSON.parse(str);
                                toReturn = false;
                                rows.forEach(function(element) {
                                    if(element.database_name === req.session.db_name && toReturn === false){
                                        toReturn = true;
                                    }
                                });
                                if(toReturn == true){
                                    //console.log("Check notes in privilegeAuthentication");
                                    // create-session k route ma uth k aye ga data from central database and req.session.allowed_apps ma jaye ga.
                                    //request ko process krna hai-- js link pe ja raha hai user wo nikalo
                                    //session sa uthao allowed_apps
                                    // match kro k allowed hai k nahe wo link jahan use jana hai
                                    // agar nahe allow toh toReturn will be false else true.
                                    //all cleared

                                    /*req.session.allowed_apps.forEach(function(entry) {
                                        if(req.originalUrl)
                                    });*/
                                    var str = JSON.stringify(req.session.allowed_apps);
                                    app_list = [];
                                    rows = JSON.parse(str);
                                    rows.forEach(function(element) {
                                        app_list.push(element.application_name);
                                    });
                                    if(app_list.includes(req.originalUrl.replace('/', ''))){
                                        toReturn = true;
                                    }
                                    else{
                                        toReturn = false;
                                    }
                                    //console.log(req.originalUrl.replace('/', ''));
                                    //console.log(app_list);
                                    //console.log("Found: " + found);
                                }
                                //if(results2.indexOf(req.session.db_name) > -1){
                                    //console.log(rows[0].database_name);
                                    //console.log(rows.indexOf((req.session.db_name)));
                                if(toReturn == true){
                                    next();
                                }
                                else return res.render('./../views/errors/503.jade');
                                //}
                            }
                            else {console.log("no database found.");
                                return res.render('./../views/errors/503.jade');}
                        }
                    });
                    //next();
                }
                else {
                    console.log("i am here");
                    return res.render('./../views/errors/503.jade');
                }
            }
        });
    }
    /*else{
        if(req.route.path.replace('/','') === "setting"){
            console.log("abc");
            // either do next() if allowed or do return res.render('./../views/errors/503.jade');
        }
        else if(req.route.path.replace('/','')){
            console.log("abcd");
        }else {
            next();
        }
    }
*/

};


router.get("/Sales",privilegeAuthentication, function(req, res, next){
    res.render('modules/Sales', {title: 'Sprout'});
});
router.get("/accounting", privilegeAuthentication,function(req, res, next){
    res.render('modules/accounting', {title: 'Sprout'});
});
router.get("/calendar", privilegeAuthentication,function(req, res, next){
    res.render('modules/calendar', {title: 'Sprout'});
});
router.get("/dashboards", privilegeAuthentication,function(req, res, next){
    res.render('modules/Dashboards', {title: 'Sprout'});
});
router.get("/expenses", privilegeAuthentication,function(req, res, next){
    res.render('modules/Expenses', {title: 'Sprout'});
});
router.get("/maintenance", privilegeAuthentication,function(req, res, next){
    res.render('modules/Maintenance', {title: 'Sprout'});
});
router.get("/timesheet", privilegeAuthentication,function(req, res, next){
    res.render('modules/timesheet', {title: 'Sprout'});
});
router.get("/notes", privilegeAuthentication, function(req, res, next){
    res.render('modules/notes', {title: 'Sprout'});
});
router.get("/repairs", privilegeAuthentication,function(req, res, next){
    res.render('modules/repairs', {title: 'Sprout'});
});
router.get("/inventory", privilegeAuthentication,function(req, res, next){
    res.render('modules/inventory', {title: 'Sprout'});
});
router.get("/manufacturing",privilegeAuthentication, function(req, res, next){
    res.render('modules/manufacturing', {title: 'Sprout'});
});
router.get("/leaves",privilegeAuthentication, function(req, res, next){
    res.render('modules/leaves', {title: 'Sprout'});
});
router.get("/employees",privilegeAuthentication,function(req, res, next){
    res.render('modules/employees', {title: 'Sprout'});
});
router.get("/projects",privilegeAuthentication, function(req, res, next){
    res.render('modules/projects', {title: 'Sprout'});
});
router.get("/attendance", privilegeAuthentication,function(req, res, next){
    res.render('modules/attendance', {title: 'Sprout'});
});
router.get("/test",privilegeAuthentication, function(req, res, next){
    res.render('modules/test', {title: 'Sprout'});
});
router.get("/recruitment",privilegeAuthentication, function(req, res, next){
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
    res.render('modules/recruitment', {title: 'Sprout'});
});
router.get("/setting", function(req, res, next){
    res.render('modules/Setting', {title: 'Sprout'});
});
<<<<<<< HEAD
router.get("/discuess", function(req, res, next){
    res.render('modules/discuess', {title: 'Sprout'});
});
router.get("/purchase", function(req, res, next){
    res.render('modules/purchase', {title: 'Sprout'});
});
router.get("/pointofsale", function(req, res, next){
    res.render('modules/Pointofsale', {title: 'Sprout'});
});



/**************************************************company and generalSettings work******************************/

//companyinfo
router.post('/company_info', function (req, res, next) {
    connection.query('SELECT * FROM `users_company` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//outgoing info
router.post('/outgoinginfo', function (req, res, next) {
    connection.query('SELECT * FROM `outgoing_email_server` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//incoming info
router.post('/incominginfo', function (req, res, next) {
    connection.query('SELECT * FROM `incoming_email_server` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//internal header info
router.post('/internalheaderinfo', function (req, res, next) {
    console.log(req.body);
    connection.query('SELECT * FROM `views` WHERE `type`= "'+req.body.type+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//external header info
router.post('/externalheaderinfo', function (req, res, next) {
    console.log(req.body);
    connection.query('SELECT * FROM `views` WHERE `type`= "'+req.body.type+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/externalfooterinfo', function (req, res, next) {
    console.log(req.body);
    connection.query('SELECT * FROM `views` WHERE `type`= "'+req.body.type+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});

//companyTable
router.post('/companytable', function (req, res, next) {
    connection.query('SELECT * FROM `users_company` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//outgoing Table
router.post('/outgoingtable', function (req, res, next) {
    connection.query('SELECT * FROM `outgoing_email_server` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            console.log(error);
=======
router.get("/discuess", privilegeAuthentication, function(req, res, next){
    res.render('modules/discuess', {title: 'Sprout'});
});
router.get("/purchase", privilegeAuthentication, function(req, res, next){
    res.render('modules/purchase', {title: 'Sprout'});
});
router.get("/pointofsale", privilegeAuthentication, function(req, res, next){
    res.render('modules/Pointofsale', {title: 'Sprout'});
});
router.get("/welcome", privilegeAuthentication, function(req, res, next){
    res.render('modules/welcome', {title: 'Sprout' , app_list: app_list});
});

// AZEEM ULLAH'S CODE ENDS HERE
// ---------------- ******************* ------------------------------ ************************** ------------------------------






//add users
router.post('/add_user', function (req, res, next) {
    // connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`current_company`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.current_company+'")', function (error, results, fields) {
    //     if (error) res.json({"status": "failed", "message": error.message});
    //
    //     else {
    //         console.log(err);
    //         res.send("query 1 error");
    //     }
    // });
    connection.query('INSERT INTO `users_access_rights`(`Sales`,`project`,`inventory`,`manufacturing`,`accounting`,`purchases`,`recruitment`,`expenses`,`timesheets`,`attandance`,`fleet`,`mass_mailing`,`pos`,`administration`) ' +
        'VALUES ("'+req.body.sales+'","'+req.body.project+'","'+req.body.inventory+'","'+req.body.manufacturing+'","'+req.body.accounting+'","'+req.body.purchases+'","'+req.body.recruitment+'","'+req.body.expenses+'","'+req.body.timesheets+'","'+req.body.attendance+'","'+req.body.fleet+'","'+req.body.massmailing+'","'+req.body.pointofsale+'","'+req.body.administration+'")', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
            res.json({"status": "failed", "message": error.message});
        }
    });
});
<<<<<<< HEAD
//incoming table
router.post('/incomingtable', function (req, res, next) {
    connection.query('SELECT * FROM `incoming_email_server` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//generalSetting
router.post('/general', function (req, res, next) {

    connection.query('INSERT INTO `general_settings`(`alias_domain`,`portal_access`,`authentication`,`import_export`,`multi_company`,`multi_currency`,`inter_company`,`shared_partners`,`shared_products`,`gdrive`) VALUES ("'+req.body.aliasdomain+'","'+req.body.portalaccess+'","'+req.body.authencation+'","'+req.body.importexport+'","'+req.body.multicompany+'","'+req.body.multicurrency+'","'+req.body.intercompany+'","'+req.body.sharepartners+'","'+req.body.shareproducts+'","'+req.body.googledrive+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        console.log(results);
    });
});
//generalsetting paper format
router.post('/paperformat', function (req, res, next) {

    connection.query('INSERT INTO `paper_format`(`name`,`size`,`orientation`,`top_margin`,`bottom_margin`,`left_margin`,`right_margin`,`display_header`,`header_spacing`,`dpi`) VALUES ("'+req.body.name+'","'+req.body.paper_size+'","'+req.body.orientation_1+'","'+req.body.top_margin+'","'+req.body.bottom_margin+'","'+req.body.left_margin+'","'+req.body.right_margin+'","'+req.body.display_header+'","'+req.body.header_spacing+'","'+req.body.output_dpi+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//Outgoing Mail Server
router.post('/outgoingmail', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `outgoing_email_server`(`description`,`priority`,`smtp_server`,`smtp_port`,`connection_security`,`username`,`password`) VALUES ("'+req.body.descriptio_n+'","'+req.body.priorit_y+'","'+req.body.smtpserver+'","'+req.body.smtpport+'","'+req.body.connectionsecurity+'","'+req.body.usernam_e+'","'+req.body.passwor_d+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//external layout header
router.post('/externalheader', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `views`(`name`,`view_type`,`model`,`sequence`,`active`,`archicture`,`type`) VALUES ("'+req.body.viewname+'","'+req.body.viewtype+'","'+req.body.model+'","'+req.body.sequence+'","'+req.body.active+'","'+req.body.ckeditor_value+'","externalheader")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//external footer
router.post('/externalfooter', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `views`(`name`,`view_type`,`model`,`sequence`,`active`,`archicture`,`type`) VALUES ("'+req.body.viewname+'","'+req.body.viewtype+'","'+req.body.model+'","'+req.body.sequence+'","'+req.body.active+'","'+req.body.ckeditor_value+'","externalfooter")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//internal footer
router.post('/internalfooter', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `views`(`name`,`view_type`,`model`,`sequence`,`active`,`archicture`,`type`) VALUES ("'+req.body.viewname+'","'+req.body.viewtype+'","'+req.body.model+'","'+req.body.sequence+'","'+req.body.active+'","'+req.body.ckeditor_value+'","internalheader")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//incoming mail
router.post('/incomingmail', function (req, res, next) {
    console.log(req);
    connection.query('INSERT INTO `incoming_email_server`(`name`,`server_type`,`server_name`,`port`,`ssl_tsl`,`username`,`password`,`status`) VALUES ("'+req.body.name+'","'+req.body.server_type+'","'+req.body.server_name+'","'+req.body.port+'","'+req.body.ssl+'","'+req.body.usernam_e+'","'+req.body.passwor_d+'","Not confirmed")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
//usertemplate
router.post('/template', function (req, res, next) {

    connection.query('INSERT INTO `users_template`(`name`,`active`) VALUES ("'+req.body.template_name+'","'+req.body.template_active+'")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });

});



/**************************************************company and generalSettings work******************************/





/**************************************************user work******************************/
//create users
router.post('/add_user', function (req, res, next) {
    //console.log(req);
=======
// get user
router.get('/get_user', function (req, res, next) {
    connection.query('SELECT `username`, `email`, `language`, `timezone` FROM `user`)', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});

router.get('/signup', function(req, res, next){
    res.render('registration', {title: 'Sprout', success: req.session.success, errors: req.session.errors});
    req.session.error = null ;
});
router.post('/check', function(req, res, next){
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var datetime = getDateTime();
    var token = bcrypt.hashSync(datetime, salt);
    var status = "inactive";
<<<<<<< HEAD
    var type = "user";
    var html = "";
    var errors = req.validationErrors();


    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/setting/usersoutcreate')
    }else {
        res.render('email_template', {token: token}, function (err, output) {
            html = output;
=======
    req.check('username', 'Invalid username').notEmpty();
    req.check('email', 'Invalid email address').isEmail();
    req.check('company_name', 'Invalid company name').notEmpty();
    req.check('phone_no', 'Invalid phone number').isInt();
    req.check('country', 'Invalid country').notEmpty();
    var html = "";

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/signup')
    }else{
        res.render('email_template',{token:token}, function (err, output)
        {
            html =  output ;
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
        });
        var mailOptions = {
            from: '<no-reply@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Hello USama ✔', // Subject line
            html: html // html body
        };
<<<<<<< HEAD
        connection.query('INSERT INTO `user`(`username`, `email`, `user_token`, `country_id`,`status`,`type`,`created_at`,`language`,`timezone`,`notification`,`alias_id`,`signature`,`barcode`,`security_pin`) ' +
            'VALUES ("' + req.body.username + '","' + req.body.email + '","' + token + '","' + req.body.country_id + '","' + status + '","' + type + '","' + datetime + '","' + req.body.language + '","' + req.body.timezone + '","' + req.body.emailmessages + '","' + req.body.alias + '","' + req.body.signature + '","' + req.body.barcode + '","' + req.body.security_pin + '")', function (error, results, fields) {

            if (error) {
                res.json({"status": "failed", "message": error.message});
            } else {
                connection.query('INSERT INTO `users_access_rights`(`current_company_id`, `sales`, `project`, `inventory`, `manufacturing`, `accounting`, `purchases`, `recruitment`, `expenses`, `timesheets`, `attandance`, `fleet`, `mass_mailing`, `pos`, `administration`,`employee`,`manager`,`equipment_manager`,`officer`, `user_id`) ' +
                    'VALUES ("' + req.body.current_company + '","' + req.body.sales + '","' + req.body.project + '","' + req.body.inventory + '","' + req.body.manufacturing + '","' + req.body.accounting + '","' + req.body.purchases + '","' + req.body.recruitment + '","' + req.body.expenses + '","' + req.body.timesheets + '","' + req.body.attendance + '","' + req.body.fleet + '","' + req.body.massmailing + '","' + req.body.pointofsale + '","' + req.body.administration + '","' + req.body.employee + '","' + req.body.manager + '","' + req.body.equipment_manager + '","' + req.body.officer + '",' + results.insertId + ')', function (error, results2, fields) {

                    if (!error) {
                        connection.query('INSERT INTO `users_allowed_company` (`company_id`, `user_id`) ' +
                            'VALUES ("' + req.body.current_company + '",' + results.insertId + ')', function (error, results, fields) {

                            if (error) {
                                res.json({"status": "failed", "message": error.message});
                            }else {
                                transporter.sendMail(mailOptions, function (err, info) {
                                    if (err) {
                                        console.log(err);
                                        res.send("Something goes wrong!");
                                    }
                                    else {
                                        console.log("successfull");
                                        //res.render('registration');
                                        res.json({"status": "ok", "result": results});
                                    }

                                });

                            }

                        });

                    } else {
                        //console.log("fail");
                        res.json({"status": "failed", "message": error.message});
                    }

                });
                // console.log(results.insertId);
                // res.json({"status": "failed", "results": results});
            }
        });
    }
});
//usertable
router.post('/usertable', function (req, res, next) {
    //console.log(req);
    connection.query('SELECT * FROM `user` ', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//user print alias value
router.post('/alias_value', function (req, res, next) {
    connection.query('SELECT * FROM `alias` WHERE `id`= "'+req.body.alias_id+'"', function (error, results, fields) {
        if (!error) {
            console.log(req.body);
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//user company id print
router.post('/comapny_id', function (req, res, next) {
    connection.query('SELECT * FROM `users_company` WHERE `id`= "'+req.body.alias_id+'"', function (error, results, fields) {
        if (!error) {
            console.log(req.body);
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user info
router.post('/user_info', function (req, res, next) {
    connection.query('SELECT * FROM `user` WHERE `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user info 2
router.post('/user_info2', function (req, res, next) {
    connection.query('SELECT * FROM `users_access_rights` WHERE `user_id`= "'+req.body.id+'" ', function (error, results, fields) {
        if (!error) {
            console.log(req.body.id);
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// get user
router.post('/get_user', function (req, res, next) {
    connection.query('SELECT `username`, `email`, `language`, `timezone` FROM `user`)', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user company id get
router.post('/source', function (req, res, next) {

    connection.query("select * from users_company", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
// alias id get
router.post('/get_alias', function (req, res, next) {

    connection.query("select * from alias", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "data": results});

        }
    });
});
// country id get
router.post('/country_id', function (req, res, next) {

    connection.query("select * from country", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});

        }
    });
});
//user update select value
router.post('/user_data', function (req, res, next) {
    connection.query('SELECT user.id, users_access_rights.project, users_access_rights.sales , users_access_rights.project, users_access_rights.inventory, users_access_rights.manufacturing, users_access_rights.accounting, users_access_rights.purchases, users_access_rights.recruitment, users_access_rights.expenses , users_access_rights.timesheets , users_access_rights.attandance, users_access_rights.fleet , users_access_rights.mass_mailing, users_access_rights.pos , users_access_rights.administration, users_access_rights.employee, users_access_rights.manager, users_access_rights.equipment_manager, users_access_rights.officer   , user.username , user.email , user.created_at, user.created_at, user.language , user.timezone, user.alias_id, user.signature, user.barcode, user.security_pin FROM user , users_access_rights ,users_allowed_company WHERE user.id = "'+req.body.id+'" AND user.id = users_access_rights.user_id AND users_allowed_company.user_id = user.id', function (error, results, fields) {
        if (error){
            res.json({"status": "failed", "message": error.message});
        }
        else{
            console.log(results);
            res.json({"status": "ok", "data": results});

        }
    });
});
// user count pagination
router.post('/user_count', function (req, res, next) {
    connection.query("select COUNT(*) as count from user", function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        } else{
            res.json({"status": "ok", "data": results});
        }
    });
});
//update user value
router.post('/update_user_value', function (req, res , results) {
    connection.query('UPDATE user SET username = "'+req.body.username+'", email = "'+req.body.email+'", language = "'+req.body.language+'", timezone = "'+req.body.timezone+'", alias_id = "'+req.body.alias_id+'", signature = "'+req.body.signature+'", barcode = "'+req.body.barcode+'" , security_pin = "'+req.body.security_pin+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "ok", "result": results});
        } else {
            connection.query('UPDATE users_access_rights SET sales = "'+req.body.sales+'", project = "'+req.body.project+'", inventory = "'+req.body.inventory+'", manufacturing = "'+req.body.manufacturing+'", accounting = "'+req.body.accounting+'", purchases = "'+req.body.purchases+'", recruitment = "'+req.body.recruitment+'" , expenses = "'+req.body.expenses+'", timesheets = "'+req.body.timesheets+'", attandance = "'+req.body.attandance+'", fleet = "'+req.body.fleet+'", mass_mailing = "'+req.body.mass_mailing+'", pos = "'+req.body.pos+'", administration = "'+req.body.administration+'" , employee = "'+req.body.employee+'" , manager = "'+req.body.manager+'" , equipment_manager = "'+req.body.equipment_manager+'" , officer = "'+req.body.officer+'" WHERE user_id = "'+ req.body.id +'"', function (error, results, fields) {
                if (error) {
                    res.json({"status": "ok", "result": results});
                } else {
                    res.send("Something goes wrong!");
                }
            });
        }
    });

});
//user active & inactive
router.post('/user_status', function (req, res, next) {
    console.log(req.body.id);
    var  status_update = 'active' ;
    var  status_update1 = 'inactive' ;
    var  status_change = req.body.status ;
    //console.log(status_change);

    connection.query('SELECT * FROM `user` WHERE id = "'+ req.body.id +'" ' , function (error, results1, fields) {
        if (!error) {
            results1.forEach(function (data) {
                if(data.status == "active"){
                    connection.query('UPDATE user SET status = "'+status_update1+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
                        if (error) {
                            res.json({"status": "ok", "result": results});
                        } else {
                            res.send("Something goes wrong!");
                        }
                    });

                }else{
                    connection.query('UPDATE user SET status = "'+status_update+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
                        if (error) {
                            res.json({"status": "ok", "result": results});
                        } else {
                            res.send("Something goes wrong!");
                        }
                    });
                }
            });

        } else {
            res.json({"status": "failed", "message": error.message});
        }
    });

});
// change password users
router.post('/change_pwd', function (req, res, next) {

    connection.query('select * from user where id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error){
            res.json({"status": "failed", "message": error.message});
        } else{
            res.json({"status": "ok", "data": results});

        }
    });
});
router.post('/user_pwd_update', function (req, res, next) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);

    connection.query('UPDATE user SET password = "'+hash+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        //console.log(hash);
        if (error) {
            res.json({"status": "failed", "message": error.message});
        } else{
            res.json({"status": "ok", "data": results});

        }
    });
});
//send resert pwd instruction
router.post('/send_resert_pwd_instruction', function (req, res, next) {

    var html = "";
    var mailOptions = {
        from: '<no-reply@gmail.com>', // sender address
        to: 'shahidhassan311@gmail.com' , // list of receivers
        subject: 'Hello USama ✔', // Subject line
        html: html // html body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.send("Something goes wrong!");
        }
        else {
            //console.log(req.body.email);
            res.render('registration');
        }
    });
});
//user delete
router.post('/delete_users', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `user` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_users_inside', function (req, res, next) {
    connection.query('DELETE FROM `user` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});

//user duplicate data
router.post('/duplicate_users', function (req, res, next) {
    connection.query('INSERT INTO `user` (`username`, `password`, `phone_no`, `country_id`, `created_at`, `type`, `sprout_users_access_rights_id`, `language`, `timezone`, `notification`, `alias_id`, `signature`, `refresh_token`, `user_token`, `token_validity`, `last_synchro`, `calander_id`, `barcode`, `security_pin`, `status`, `general_settings_id`) select Concat(username,"(copy)"), `password`, `phone_no`, `country_id`, `created_at`, `type`, `sprout_users_access_rights_id`, `language`, `timezone`, `notification`, `alias_id`, `signature`, `refresh_token`, `user_token`, `token_validity`, `last_synchro`, `calander_id`, `barcode`, `security_pin`, `status`, `general_settings_id` from user where `id`= "'+req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }
        // console.log(results);
    });
});
// signup
router.get('/signup', function(req, res, next){
    res.render('registration', {title: 'Sprout', success: req.session.success, errors: req.session.errors});
    req.session.error = null ;
});
=======
        // res.json(req.body);
        connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`phone_no`,`country`,`user_token`,`status`,`created_at`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.phone_no+'","'+req.body.country+'","'+token+'","'+status+'","'+datetime+'")', function (error, results, fields) {
            if (error) res.json({"status": "failed", "message": error.message});

            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                    console.log(err);
                    res.send("Something goes wrong!");
                }
                else {
                    res.render('registration');
                }

            });
        });
        //req.session.success = true;
    }

});

>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
router.post('/check', function(req, res, next){
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var datetime = getDateTime();
    var token = bcrypt.hashSync(datetime, salt);
    var status = "inactive";
    req.check('username', 'Invalid username').notEmpty();
    req.check('email', 'Invalid email address').isEmail();
    req.check('company_name', 'Invalid company name').notEmpty();
    req.check('phone_no', 'Invalid phone number').isInt();
    req.check('country', 'Invalid country').notEmpty();
    var html = "";

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/signup')
    }else{
        res.render('email_template',{token:token}, function (err, output)
        {
            html =  output ;
        });
        var mailOptions = {
            from: '<no-reply@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Hello USama ✔', // Subject line
            html: html // html body
        };
        // res.json(req.body);
<<<<<<< HEAD
        connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`phone_no`,`country`,`user_token`,`status`,`created_at`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.phone_no+'","'+req.body.country+'","'+token+'","'+status+'","'+datetime+'")', function (error, results, fields) {
            if (error) res.json({"status": "failed", "message": error.message});

            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                    console.log(err);
                    res.send("Something goes wrong!");
                }
                else {
                    res.render('registration');
                }

            });
        });
=======
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
        //req.session.success = true;
    }

});
<<<<<<< HEAD
// email template
router.get('/email_temp', function(req, res, next){
    res.render('email_template', {title: 'Sprout'});
});
// dashboard
router.get('/dashboard', func.isLoggedIn, function(req, res, next){
    res.render('dashboard', {title: 'Sprout'});
});
router.get('/',function (req , res ) {
    res.render('dashboard', {
        isAuthenticated: false,
        users: req.user
    });
});
// process the login form
router.get('/login',func.notLoggedIn, function(req, res, next) {
    // if(req["sessions"].hasOwnProperty("flash"))
    console.log(req);
    res.render('login', {title: 'Sprout'});
});
router.post('/sign', passport.authenticate('local-login', {
    successRedirect : '/dashboard', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
// password
=======




router.get('/email_temp', function(req, res, next){
    res.render('email_template', {title: 'Sprout'});
});
router.get('/dashboard', func.isLoggedIn, function(req, res, next){
    res.render('dashboard', {title: 'Sprout'});
});

router.get('/login',func.notLoggedIn, function(req, res, next){
    // if(req["sessions"].hasOwnProperty("flash"))
        console.log(req);
    res.render('login', {title: 'Sprout'});
});

// process the login form
router.post('/sign', passport.authenticate('local-login', {
        successRedirect : '/dashboard', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
router.get('/password', function(req, res, next){
    var token = req.query.token;
    var errors = req.session.errors;
    req.session.error = null ;
    res.render('password', {title: 'Sprout' , success: req.session.success, errors: errors, token: token});

});
router.post('/password', function(req, res, next){
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var token = req.body._token;
    // req.check('email', 'Invalid email address').isEmail();
    req.check('password', 'Password not matched!').isLength({min: 6}).withMessage("Password is too short!").equals(req.body.confirmpass);

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        res.redirect("password?token="+token);
    }else{
<<<<<<< HEAD
        connection.query('UPDATE user SET password = "'+hash+'", status = "active" WHERE user_token = "'+token+'"'  , function (error, results, fields) {
            if (error) res.send("failed: "+error.message);
            res.redirect('/setting/users')
=======
        connection.query('UPDATE user SET password = "'+hash+'", status = "Active" WHERE user_token = "'+token+'"'  , function (error, results, fields) {
            if (error) res.send("failed: "+error.message);
            res.redirect('/dashboard')
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83
        });
        //req.session.success = true;
    }

});
<<<<<<< HEAD
//project assigned
router.post('/project', function (req, res, next) {
    connection.query('SELECT * FROM `projects`' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
router.post('/project_id', function (req, res, next) {
    connection.query('SELECT * FROM `projects` WHERE id= "'+req.body.id+'" ' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//user id
router.post('/user_id', function (req, res, next) {
    connection.query('SELECT * FROM `user` ' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// project detail
router.post('/tags_id', function (req, res, next) {
    connection.query('SELECT * FROM `tags`' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// contact detail
router.post('/contact_id', function (req, res, next) {
    connection.query('SELECT * FROM `contact`' , function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//task assigned usertable
router.post('/assigned_task_table', function (req, res, next) {
    //console.log(req);
    connection.query('SELECT tasks.id,tasks.task_tittle, projects.name, user.username FROM projects INNER JOIN tasks ON tasks.project_id = projects.id INNER JOIN user ON user.id = tasks.assigned_to_id', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
            //console.log(results);
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
// user tasks
router.post('/user_tasks', function (req, res, next) {
    var status = "active";
    connection.query('INSERT INTO `tasks`(`task_tittle`,`project_id`,`assigned_to_id`,`deadline`,`description`,`customer_id`,`status`) ' +
        'VALUES ("' + req.body.task_tittle + '","' + req.body.product_detail + '","' + req.body.assigned_to_id + '","' + req.body.date_deadline + '","' + req.body.description + '","' + req.body.customer_id + '","' + status + '")', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        } else  {
            connection.query('INSERT INTO `tasks_tags`(`tasks_id`,`tag_id`) ' +
                'VALUES ('+ results.insertId + ' ,"' + req.body.tag_details + '")', function (error, results1, fields) {
                if (error) {
                    res.json({"status": "failed", "message": error.message});
                } else {
                    res.json({"status": "sucess", "message": results1});
                }
            });
            //res.json({"status": "sucess", "message": results});
        }
    });
});
//task assigned view
router.post('/assigned_task_view', function (req, res, next) {
    connection.query('SELECT tasks.task_tittle, tasks.deadline, tasks_tags.tag_id, tasks.project_id, tasks.assigned_to_id, tasks.customer_id, tasks.description, contact.name AS customer_name , projects.name AS project_name, user.username, tags.name AS tags_name FROM tasks, projects ,user , tasks_tags , tags , contact WHERE tasks.id = "'+req.body.id+'" AND tasks.project_id = projects.id AND tasks.assigned_to_id = user.id AND tags.id = tasks_tags.tasks_id AND tasks.customer_id = contact.id', function (error, results, fields) {
        if (!error) {
            console.log(results);
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
});
//update assigned task
router.post('/update_user_assigned_task', function (req, res , results) {
    console.log(req.body);
    connection.query('UPDATE tasks SET task_tittle = "'+req.body.task_tittle+'", project_id = "'+req.body.project_name+'", assigned_to_id = "'+req.body.assigned_username+'", deadline = "'+req.body.date_deadline+'", description = "'+req.body.task_description+'", customer_id = "'+req.body.customer_name+'" WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (!error) {
            res.json({"status": "ok", "result": results});
        } else {
            //console.log("check");
            res.json({"status": "failed", "message": error.message});
        }
    });
    connection.query('UPDATE tasks_tags SET tag_id = "'+req.body.tags_id+'", WHERE id = "'+ req.body.id +'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "ok", "result": results});
        } else {
            res.send("Something goes wrong!");
        }
    });

});
//user assigned delete
router.post('/user_assigned_task', function (req, res, next) {
    for (var i = 0; i < req.body.delete_items.length; ++i) {
        connection.query('DELETE FROM `tasks` WHERE id = "'+req.body.delete_items[i]+'"' , function (error, results, fields) {
            if (error){
                res.json({"status": "failed", "message": error.message});
            }
            // console.log(results);
        });
    }
    console.log(req.body.delete_items);

});
router.post('/delete_tasks_assigned_inside', function (req, res, next) {
    connection.query('DELETE FROM `tasks` WHERE id = "' +req.body.id+'"', function (error, results, fields) {
        if (error) {
            res.json({"status": "failed", "message": error.message});
        }else {
        }
        // res.redirect('setting/users')
        // console.log(results);
    });
    //console.log(req.body.delete_items);
});
//pagination users
router.post('/user_pagination_next', function (req, res, next) {

    connection.query('SELECT * FROM user WHERE id = ( SELECT MIN( id ) FROM user WHERE id >'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "result": results});

        }
    });

});
router.post('/user_pagination_previous', function (req, res, next) {

    connection.query('SELECT * FROM user WHERE id = ( SELECT max( id ) FROM user WHERE id <'+"'"+ req.body.id +"'" +')',function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else{
            res.json({"status": "ok", "result": results});
        }
    });

});
/**************************************************user work******************************/
=======



>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83



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

<<<<<<< HEAD
}




// connection.query('SELECT tasks.task_tittle , projects.name , user.username FROM tasks, projects ,user WHERE tasks.id = "'+req.body.id+'"  AND tasks.project_id = projects.id AND tasks.assigned_to_id = user.id', function (error, results, fields) {
=======
}
>>>>>>> 526c285025165345c1f9b3a1662a180597b10f83

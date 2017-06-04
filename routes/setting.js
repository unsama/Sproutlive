var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");

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
    host: "46.101.37.156",
    user: "sprout",
    password: "sprout12345",
    database: "sprout"
});



connection.connect(function (err) {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});



// router.post('/add_user', function(req, res, next){
//     connection.query('INSERT INTO `user`(`username`, `email`,`company_name`,`current_company`) VALUES ("'+req.body.username+'","'+req.body.email+'","'+req.body.company_name+'","'+req.body.current_company+'")', function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//
//     });
//     connection.query('INSERT INTO `users_access_rights`(`sales`,`project`,`inventory`,`manufacturing`,`accounting`,`purchases`,`recruitment`,`expenses`,`timesheets`,`attendance`,`fleet`,`massmailing`,`pointofsale`,`administration`) VALUES ("'+req.body.sales+'","'+req.body.project+'","'+req.body.inventory+'","'+req.body.manufacturing+'","'+req.body.accounting+'","'+req.body.purchases+'","'+req.body.recruitment+'","'+req.body.expenses+'","'+req.body.timesheets+'","'+req.body.attendance+'","'+req.body.fleet+'","'+req.body.massmailing+'","'+req.body.pointofsale+'","'+req.body.administration+'")', function (error, results, fields) {
//         if (error) res.json({"status": "failed", "message": error.message});
//
//     });
//
// });

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
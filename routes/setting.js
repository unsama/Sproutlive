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

var async = require('async')        //azeem ullah's commit
var multer  = require('multer');
var path = require('path');
const fs = require('fs');


var dbName = "sprout";

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'usama4slash@gmail.com',
        pass: 'usama4slash1234'
    }
});


/*var connection = mysql.createConnection({
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
*/

var mysql = require('./db_conn');
connection = mysql.config("sprout");
connection = mysql.connect(connection);
mysql.close(connection);
//mysql.close(db);

router.get("/inviteuser", function(req, res, next){
    res.render('inviteuser', {title: 'Sprout' });
});

//-----Azeem Ullah - Settings/create-company

router.get("/create-company/get-meta", function(req, res, next){
    async.parallel([
        function(callback){
            global.connection.query("select id, country_name from country", function (error, result1) {
                callback(error,result1)
            });
        },
        function(callback){
            global.connection.query("select id, state_name from country_states", function (error, result2) {
                callback(error,result2)
            });
        },
        function(callback){
            global.connection.query("select id, currency from currency", function (error, result3) {
                callback(error,result3)
            });
        },
        function(callback){
            global.connection.query("select id, company_name from users_company", function (error, result4) {
                callback(error,result4)
            });
        },


    ],function(err,results){
        if(err){
            console.log(err);
            res.json({"status": "failed", "message": error.message});
        }else{
            res.send(JSON.stringify(results));
        }

    })
});



router.get("/create-company/get-meta/given-country/:country_id", function(req, res, next){
    console.log("id is:"+req);
    connection.query("select id, state_name from country_states where country_id = '"+req.params.country_id+"'", function (error, results, fields) {
        if (error) res.json({"status": "failed", "message": error.message});
        else res.send(JSON.stringify(results));
    });
});


router.post("/create-company", function(req, res, next){
    console.log(req.body.companyStateId);
    var query = "INSERT INTO `users_company` (`id`, `company_name`, `tag_line`, `street_one`, `street_two`, `city`, `state_id`, `zip`, `country_id`, `website`, `phone`, `fax`, `email`, `tax_id`, `current_registry`, `currency_id`, `type`, `parent_company_id`, `image_url`)" +
        " VALUES (NULL, '"+req.body.companyName+"', '"+req.body.companyTagline+"', '"+req.body.companyStreetOne+"', '"+req.body.companyStreetTwo+"', '"+req.body.companyCity+"', '"+req.body.companyStateId+"', '"+req.body.companyZip+"', '"+req.body.companyCountryId+"', '"+req.body.companyWebsite+"', '"+req.body.companyPhone+"', '"+req.body.companyFax+"', '"+req.body.companyEmail+"', '"+req.body.companyTaxID+"', '"+req.body.companyRegistry+"', '"+req.body.companyCurrencyId+"', 'branch', '"+req.body.companyParentCompanyId+"', '"+req.body.image_url+"')";
    connection.query(query, function (error, results, fields) {

        if (error) res.json({"status": "failed", "message": error.message});
        else res.send(JSON.stringify({ results }));
    });
});




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/'+dbName+'/company/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });

router.post('/create-company/upload-image', upload.single('image'), (req, res) => {
    var fileDetails = req.file;
    return res.send(fileDetails);
});



router.post("/create-company/delete-image", function(req, res, next){
    if (fs.existsSync("public/"+req.body.imagePath)) {
        fs.unlink("public/"+

            req.body.imagePath, (err) => {
            if (err) throw err;
            res.send({status: 'success', error: err, abc: req.body.imagePath});
        });
    }
    else
        res.send({status:"error", error: "File Not found!", abc: req.body.imagePath});

});





//----------------------------------------------

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


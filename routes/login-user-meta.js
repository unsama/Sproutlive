/**
 * Created by 4slashmac on 6/17/17.
 */
/**
 * Created by 4slashmac on 5/26/17.
 */
var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var validator = require("express-validator");
var passportlocal = require("passport-local");

var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var saltRounds = 10;
var nodemailer = require("nodemailer");

var mysql = require("mysql");

var fs = require('fs');
var async = require('async');


var mysql = require("mysql");


//var sys = require('sys');
//var exec = require('child_process').exec;

var util = require('util');

var SSH = require('simple-ssh');

var randomstring = require("randomstring");
//var Connection  = require('ssh2');
var mysql = require("mysql");
var async = require('async');


router.get("/", function (req, res) {
    var resultant = [];

    var loginEmail = req.body.email = 'azeemullah@gmx.com';
    var loginPassword = req.body.password = 'abc123';

    var connection = mysql.createConnection({
        host: "46.101.37.156",
        user: "sprout",
        password: "sprout12345"
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    });


    connection.query("SELECT  `SCHEMA_NAME` FROM  `INFORMATION_SCHEMA`.`SCHEMATA` WHERE  `SCHEMA_NAME` LIKE  '%sprout_%'"
        , function (error, results) {
            if (error) {
                console.log("Error while getting user-database metadata: " + error);
            }
            else {
                results.forEach(function (entry) {
                    connection.query("select u.email,u.type as user_type,u.status,uc.company_name,uc.type as company_type " +
                        "from " + entry.SCHEMA_NAME + ".user u, " + entry.SCHEMA_NAME + ".users_company uc " +
                        "where u.email='" + loginEmail + "' and uc.type = 'base';"
                        , function (error, result) {
                            var count = 0;
                            if (error) {
                                console.log("Error while searching in databases: " + error);
                            }
                            else {
                                //console.log(result)
                                if (result != '') {
                                    resultant.push(result);
                                }
                                if (count === result.length) {
                                    res.send(resultant);
                                }
                                count++;
                            }
                        });
                });
            }
        });
});

module.exports = router;
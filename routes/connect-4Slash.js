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
var bcrypt   = require('bcrypt-nodejs');
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
//
// var execsql = require('execsql');
//     var dbConfig = {
//         host: "46.101.37.156",
//         port: 81,
//         user: "sprout",
//         password: "sprout12345"
//
//     };
//     var sql = 'use abcd;';
//     var sqlFile = "public/database" + '/sprout-most-recent.sql';
//

//
// const importer = require('node-mysql-importer');
//
// importer.config({
//     'host': "46.101.37.156",
//     'user': "sprout",
//     'password': "sprout12345",
//     'database': 'abcd'
// });
//

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

    return year + "" + month + "" + day + "" + hour + "" + min + "" + sec;

}




function puts(error, stdout, stderr) {
    var a = stdout;
    console.log(a.length);
}



var authentication = function(req, res, next) {
    //console.log(req.session.db_name);
        if (req.token == 'abcdefgh') {
            next();
        }
        else {
            res.status(401).send({message: 'Unauthorized Access. This attempt will be reported.'});
        }
};




router.post("/", function(req, res){
    var companyNamePrefix = 'sprout';
   // var a = exec("ls -la", (err, stdout, stderr));

    var fullName = req.body.full_name ="a";
    var password = req.body.password="a";
    var adminEmail = req.body.admin_email="a";
    var companyName = req.body.company_name="a";
    var country = req.body.country="a";
    var userNumber = req.body.user_number="a";
    var phoneNumber = req.body.phone_number="a";
    var pakageType = req.body.pakage_type="a";
    var createdAt = req.body.created_at;

    // --- NOT OF OUR USE ---
    // var totalAmount = req.body.total_amount;
    // var createdAt = req.body.created_at;





    /*
    ssh
        .exec('cd; mysql -u sprout -psprout12345;', {
            out: console.log.bind(console)
        })
        .exec('ls', {
            out: console.log.bind(console)
        })
        .exec('echo "awesome!"', {
            out: console.log.bind(console)
        })
        .start();

*/



    var newFileName ='';
    var db_name = '';


    async.waterfall(
        [
            function(callback) {
                newFileName = getDateTime() + "_" + randomstring.generate(10);
                db_name = companyNamePrefix + "_" + companyName + newFileName;
                console.log(db_name);

                callback(null);

            },


            function(callback) {
                var ssh = new SSH({
                    host: '46.101.37.156',
                    user: 'sprout',
                    pass: '4slash1234'
                });



                ssh.exec('mysql -u sprout -psprout12345 -e "create database '+ db_name +'"; ' +
                    'mysql -u sprout -psprout12345 '+ db_name +' < ~/db_backups/sprout_11072017.sql', {
                    exit: function(code) {
                        if (code == 0){
                            callback(null);
                        }
                        else{
                            res.status(500).send({ error: 'Error closing SSH!' });
                        }

                    }

                }).start();

               // ssh.exec('exit');
                //callback(null);
            },

            function(callback) {
                //db_name = "sprout_a20170617140919_FcVgMUhLIA";
                var connection = mysql.createConnection({
                    host: "46.101.37.156",
                    user: "sprout",
                    password: "sprout12345",
                    database: db_name
                });

                connection.connect(function (err) {
                    if(err){
                        res.status(500).send({ error: 'Error Connecting to database', details: err});
                        return;
                    }
                    console.log("connected as id "+ connection.threadId);


                });

                callback(null,connection);
            },

            function(connection,callback) {
                connection.query("INSERT INTO `"+db_name+"`.`country` " +
                    "( `id` , `country_name`) " +
                    "VALUES ( NULL , '"+country+"')"
                    , function (error, result1) {
                        if(error){
                            res.status(500).send({ error: "Error while inserting country: ", details: error});
                        }

                        callback(null,result1.insertId,connection);
                    });

                //callback(null, "Done!");

            },

            function(countryId, connection, callback) {
                connection.query("INSERT INTO `"+db_name+"`.`users_company` " +
                    "( `id` , `company_name` , `email` , `type`) " +
                    "VALUES ( NULL , '"+companyName+"', '"+adminEmail+"', 'base')"
                    , function (error,result2) {
                        if(error) {
                            res.status(500).send({ error: "Error while inserting company: ", details: error});
                        }
                    });

                callback(null,countryId,connection);

            },

            function(countryId, connection, callback) {
                connection.query("INSERT INTO `"+db_name+"`.`user` " +
                    "( `id` , `username` , `email` , `password` , `phone_no` , `country_id` , `created_at` , `type`, `status`) " +
                    "VALUES ( NULL , '"+fullName+"', '"+adminEmail+"', '"+password+"', '"+ phoneNumber +"', '"+ countryId +"' , '"+createdAt+"', 'admin','active')"
                    , function (error) {
                        if(error){
                            res.status(500).send({ error: "Error while inserting user: ", details: error});
                        }
                        connection.end();
                        callback(null,"Done!");
                    });

                //callback(null, "Done!");

            }

        ],
        function (err, responsa) {
            console.log(responsa);
        }
    );












/*
    async.parallel([
        function(callback){
            connection.query("INSERT INTO `"+db_name+"`.`user` " +
                "( `id` , `username` , `email` , `password` , `phone_no` , `country_id` , `created_at` , `type` , `sprout_users_access_rights_id` , `language` , `timezone` , `notification` , `alias_id` , `signature` , `refresh_token` , `user_token` , `token_validity` , `last_synchro` , `calander_id` , `barcode` , `security_pin` , `status` , `general_settings_id` ) " +
                "VALUES ( NULL , '"+fullName+"', '"+adminEmail+"', '"+password+"', '"+ phoneNumber +"', '"+** TBD ** +"' , '"+createdAt+"', 'admin', NULL , '', '', '', NULL , '', '', '', NULL , NULL , '', '', '', '', NULL"
            , function (error, result1) {
                callback(error,result1)
            });
        },
        function(callback){
            connection.query("select id, state_name from country_states", function (error, result2) {
                callback(error,result2)
            });
        },
        function(callback){
            connection.query("select id, currency from currency", function (error, result3) {
                callback(error,result3)
            });
        },
        function(callback){
            connection.query("select id, company_name from users_company", function (error, result4) {
                callback(error,result4)
            });
        },


    ],function(err,results){
        if(err){
            res.json({"status": "failed", "message": error.message})
        }else{
            res.send(JSON.stringify(results));
        }
    })

*/

/*

    ssh.exec('ls', {
        out: function(stdout) {
            console.log(stdout);
        },
        err: function(stderr) {
            console.log(stderr); // this-does-not-exist: command not found
        }
    }).start();
*/





/*
    exec("ssh sprout@46.101.37.156", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("SSH Connected!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });
*/

    //console.log(a.length);


// To create dump file; will not be used as we have already created one dump file and will use it every time for the sake of efficiency and speed.
// How ever if structure of database is changed; dump will also need an update.
/*



    exec("mysqldump -d -u sprout -psprout12345 sprout > ~/db_backups/"+newFileName+".sql", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("MySql Connected!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });

*/
/*

    exec("mysql -u sprout -psprout12345", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("MySql Connected!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });

    var newFileName = getDateTime();
    var db_name = companyName + newFileName
    console.log(db_name);

    exec("create database "+ db_name +";", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("Database Created!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });

    exec("exit", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("MySql Disconnected!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });

    exec("mysql -u sprout -psprout12345 "+ db_name +" < ~/db_backups/sprout_11062017.sql", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("DB Imported!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });

    exec("exit", function (error, stdout, stderr) {
        if(stderr != '')
            console.log("Exit-ed SSH!");
        else
            console.log('stdout: ' + stdout);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });
*/

    // var dbName = "abcd";
    // var sql = 'CREATE DATABASE ' + dbName;
    //
    //
    // connection2.query(sql, function (error, results) {
    //     if (error) res.json({"status": "failed", "message": error.message});
    //     else res.send(JSON.stringify({ results }));
    // });
    //
    //
    // sql = fs.readFileSync('public/database/sprout-most-recent.sql').toString();
    //
    // connection2.query(sql, function (error, results, fields) {
    //     if (error) res.json({"status": "failed", "message": error.message});
    //     else res.send(JSON.stringify({ results }));
    // });

    //res.send(sql);




    // async.waterfall(
    //     [
    //         function(callback) {
    //             console.log("I am here!");
    //             var dbName = "abcd";
    //             var sql = '';
    //
    //             var connection = mysql.createConnection({multipleStatements: true});
    //             var connection = mysql.createConnection({
    //                 host: "46.101.37.156",
    //                 user: "sprout",
    //                 password: "sprout12345",
    //                 database: "abcd"
    //             });
    //
    //             // var sql = 'CREATE DATABASE ' + dbName;
    //             // connection.query(sql, function (error) {
    //             //              if (error) res.json({"status": "failed", "message": error.message});
    //             //              else callback(null,sql,dbName);
    //             // });
    //             callback(null,sql,dbName,connection);
    //         },
    //
    //         function(sql, dbName, connection, callback) {
    //             console.log("I am here!");
    //             sql += fs.readFileSync('public/database/sprout-most-recent.sql').toString();
    //             connection.query(sql, function (error) {
    //                     if (error) res.json({"status": "failed", "message": error.message});
    //                     else callback(null, "Done!");
    //             });
    //
    //
    //         }
    //     ],
    //     function (err, responsa) {
    //         console.log(responsa);
    //         // Node.js and JavaScript Rock!
    //     }
    // );


    // execsql.config(dbConfig)
    //     .exec(sql)
    //     .execFile(sqlFile, function (err, results) {
    //         if (err) throw err;
    //         console.log(results);
    //     })
    //     .end();





    // importer.importSQL('public/database/sprout-most-recent.sql').then( () => {
    //     console.log('all statements have been executed')
    // }).catch( err => {
    //     console.log(`error: ${err}`)
    // })


});








module.exports = router;
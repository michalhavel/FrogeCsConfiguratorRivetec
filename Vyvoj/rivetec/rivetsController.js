var express = require('express');
var router = express.Router();
var csv = require('csvtojson');
const csvFilePath = 'rivetec/rivets.csv';

var routes = function () {
    router.route('/')
        .get(function (req, res) {
            csv()
                .fromFile(csvFilePath)
                // Varianta s Lambda funkci
                .then((jsonObj) => {
                    console.log('Lambda funkce')
                    console.log(jsonObj);
                    res.json(jsonObj);

                // Varianta s normalni funkci
                // .then(function (jsnO) {
                //     console.log('Standardni funkce')
                //     console.log(jsnO);
                //     res.json(jsnO);

                })
        })
    return router;
};

module.exports = routes;
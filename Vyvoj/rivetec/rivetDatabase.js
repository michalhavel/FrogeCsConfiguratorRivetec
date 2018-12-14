
module.exports = {
    // hello: function() {
    //    return "Hello";
    // }

    hello: getHello,
    getRivets : getRivets

}

function getHello() {
    return "Hello";
}

const csvFilePath = 'rivetec/rivets.csv' //'<path to csv file>'
const csv = require('csvtojson')

// csv()
//     .fromFile(csvFilePath)
//     .then((jsonObj) => {
//         console.log(jsonObj);
//         /**
//          * [
//          * 	{a:"1", b:"2", c:"3"},
//          * 	{a:"4", b:"5". c:"6"}
//          * ]
//          */
//     })

function getRivets(callback) {
    console.log('called rivetec/rivetDatabase.js/getRivets');
    var csv2 = csv();
    console.log('getRivets - created csv2');
    csv2.fromFile(csvFilePath);
    console.log('getRivets - set file to: ' + csvFilePath);

    csv2.then((jsonObj) => { 
        console.log('getRivets - .then start');
        console.log(jsonObj);

        callback(jsonObj);
        console.log('getRivets - callback executed');
    });
        
    console.log('ended getRivets');
}

// module.exports = { getRivet: getRivet() }




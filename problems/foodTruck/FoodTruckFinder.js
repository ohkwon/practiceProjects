//*******************************************
// helper function, converts strings to Title Case
//*******************************************
String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function(str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
}
//*******************************************
// helper function, ensures that time string will have 2 digits, outputs as String
//*******************************************
Number.prototype.standardizeDigits = function() {
    return (this < 10 ? '0' : '') + this.toString();
}
//*******************************************
// helper function, clean package to output hour and minute stamp
//*******************************************
Date.prototype.formatTime = function() {
    return "'" + this.getHours().standardizeDigits() + ':' + this.getMinutes().standardizeDigits() + "'";
}
//*******************************************
// Driver Function
//*******************************************
function FoodTruckFinder() {
    // load our dependencies
    var request    = require('request');
    var promptSync = require('prompt-sync')({sigint: true});

    // set date and url and url parameters
    var today = new Date();
    var url   = "http://data.sfgov.org/resource/bbb8-hzi6.json"
              + "?$where=dayorder = " + today.getDay()
              + " AND start24 <= " + today.formatTime()
              + " AND end24 > " + today.formatTime()
              + " &$order=applicant ASC";

    request(url, function (error, response, body) {
        var data = JSON.parse(body);

        if (typeof data.error !== 'undefined' && data.error) {
            // error handling if issue with call or API
            console.log('Error!: ' + (typeof data.message !== 'undefined' ? data.message : 'Request Failed'));
            return;
        }

        console.log('NAME ADDRESS');

        for(var i = 0; i < data.length; i++) {
            if (i > 0 && ! (i % 10)) {
                // use prompt to output every 10th food truck for no gap in lines
                const prompt = promptSync(data[i].applicant + ' ' + data[i].location.toTitleCase());
            } else {
                console.log(data[i].applicant + ' ' + data[i].location.toTitleCase());
            }
        }
    });
}

FoodTruckFinder();

// installing dependencies
// npm install request
// npm install prompt-sync

// running:
// node FoodTruckFinder.js
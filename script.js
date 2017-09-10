'use strict';

var exports = module.exports = {};

exports.convertDMtoDecimal = function(comp) {
    var re1 = /[0-5]\d\.\d{3}/;
    var re2 = /(([NS][0-8]\d|[EW][0-1][0-8]\d)(°|\s|°\s))/;
    var re4 = /^(W|S)/;
    var rawminutes, rawdegrees, minutes, degrees, convertedCoordinates, checkWestSouth;

    checkWestSouth = re4.test(comp);

    rawminutes = comp.match(re1);
    rawdegrees = comp.match(re2);

    if (rawdegrees != undefined) {
        degrees = convertDegreesToDecimal(rawdegrees);
    } else {
        return null;
    }

    if (rawminutes != undefined) {
        minutes = convertMinutesToDecimal(rawminutes);
    } else {
        return null;
    }

    minutes = convertMinutesToDecimal(rawminutes);
    convertedCoordinates = (degrees + minutes); 

    if (checkWestSouth) {
        convertedCoordinates = Math.abs(convertedCoordinates) * -1;
    } 

    return convertedCoordinates;
}

exports.convertDecimaltoDMLat = function(comp) {
    const north = 'N';
    const south = 'S';
    const degree = '°';
    var result, fractional, degrees, minutes;
    // check if value is between 0 and 90
    // then abort
    if (comp < -90 || comp > 90) {
        return null;
    }
    // get fractional digits
    fractional = comp % 1;
    // remove fractional from comp
    degrees = comp - fractional;

    // calculate minutes
    minutes = fractional * 60;

    //only three fractions for decimal minutes
    minutes = minutes.toFixed(3);

    if ( minutes == 0.000 ) {
        minutes = '00.000';
    }

    // add zeros to front
    if (degrees < 10 && degrees > -10) {
        degrees = '0' + Math.abs(degrees);
    } else {
        degrees = Math.abs(degrees);
    }
    
    

    //check if positive or negative an choose Number
    if (comp > 0) {
        result = north + degrees + degree + ' ' + minutes;
    } else {
        result = south + degrees + degree  + ' ' + minutes;
    }

    return result;
}

exports.convertDecimaltoDMLng = function(comp) {
    const east = 'E';
    const west = 'W';
    const degree = '°';
    var result, fractional, degrees, minutes;
    // check if value is between 0 and 180
    // then abort
    if (comp < -180 || comp > 180) {
        return null;
    }
    // get fractional digits
    fractional = comp % 1;
    // remove fractional from comp
    degrees = comp - fractional;

    // calculate minutes
    minutes = fractional * 60;

    //only three fractions for decimal minutes
    minutes = minutes.toFixed(3);

    if ( minutes == 0.000 ) {
        minutes = '00.000';
    }

    // add zeros to front
    if (degrees < 10 && degrees > -10) {
        degrees = '00' + Math.abs(degrees);
    }
    
    if (degrees > 9 && degrees < 100) {
        degrees = '0' + Math.abs(degrees);
    } else {
        Math.abs(degrees);
    }

    //check if positive or negative an choose Number
    if (comp > 0) {
        result = east + degrees + degree + ' ' + minutes;
    } else {
        result = west + degrees + degree  + ' ' + minutes;
    }

    return result;
}

function convertDegreesToDecimal(degrees) {
    var extractDegrees = /\d{2,3}/;
    degrees = degrees[0].match(extractDegrees);
     degrees = parseFloat(degrees);
    return degrees;
}

function convertMinutesToDecimal(minutes) {
    minutes = parseFloat(minutes);
    var convertedDecimals = minutes / 60;
    return convertedDecimals;
}
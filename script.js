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

    console.log(convertedCoordinates);
    return convertedCoordinates;
}

exports.convertDecimaltoDM = function(comp) {
    return 'runs';
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
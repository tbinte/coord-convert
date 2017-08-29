'use strict';
/* var dm = "N51° 25.322"; */
/* var dm = "E007° 00.165"; */

/* var re3 = /(([NS]\d{2}|[EW]\d{3})(°|\s|°\s))(\d{2}(\.|\,)\d{3})/;

convertDMtoDecimal(dm);
 */

/**
 * Adds commas to a number
 * @param {string} comp
 * @return {number}
 */
module.exports = function convertDMtoDecimal(comp) {
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
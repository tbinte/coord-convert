var dm = "N51° 25.322";
var dm = "E007° 00.165";

var re3 = /((N\d{2}|E\d{3})(°|\s|°\s))(\d{2}(\.|\,)\d{3})/;

convertDMtoDecimal(dm);

function convertDMtoDecimal(comp) {
    var re1 = /\d{2}\.\d{3}/;
    var re2 = /((N\d{2}|E\d{3})(°|\s|°\s))/;
    var rawminutes, rawdegrees, minutes, degrees;

    rawminutes = comp.match(re1);
    rawdegrees = comp.match(re2);
    minutes = convertMinutesToDecimal(rawminutes);
    degrees = convertDegreesToDecimal(rawdegrees);
    console.log("Minuten: " + minutes);
    console.log("Grad: " + degrees);
    console.log(degrees + minutes);
    return degrees + minutes;
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
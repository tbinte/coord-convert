var dm = "N51° 25.322";
var degrees;

var re3 = /(N\d{2}(°|\s|°\s))(\d{2}(\.|\,)\d{3})/;

extractMinutes(dm);

function extractMinutes(comp) {
    var re1 = /\d{2}\.\d{3}/;
    var re2 = /(N\d{2}(°|\s|°\s))/;
    var minutes;

    minutes = comp.match(re1);
    degrees = comp.match(re2);
    convertToDecimal(minutes);
}

function convertToDecimal(minutes) {
    minutes = parseFloat(minutes);
    var convertedDecimals = minutes / 60;
    finalize(convertedDecimals);
}

function finalize(converted) {
    var extractDegrees = /\d{2}/;
    degrees = degrees[0].match(extractDegrees);
    degrees = parseFloat(degrees);
    converted = degrees + converted;
    converted = converted.toFixed(5);
    console.log(converted);
}
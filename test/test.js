'use strict';

var expect = require('chai').expect;
var convertDMtoDecimal = require('../script');

describe('Convert DM to Decimal', function() {

    it('should convert northern coordinates correctly', function() {
        var result = convertDMtoDecimal('N51° 25.322');
        expect(result).to.equal(51.42203333333333);
    });

    it('should convert eastern coordinates correctly', function() {
        var result = convertDMtoDecimal('E007° 00.165');
        expect(result).to.equal(7.00275);
    });

    it('should convert western coordinates correctly', function() {
        var result = convertDMtoDecimal('W007° 00.165');
        expect(result).to.equal(-7.00275);
    });

    it('should convert southern coordinates correctly', function() {
        var result = convertDMtoDecimal('S51° 25.322');
        expect(result).to.equal(-51.42203333333333);
    });

    it('should return null on incorrent formatted degrees', function() {
        var result = convertDMtoDecimal('W230° 25.322');
        expect(result).to.be.null;
    });

    it('should return null on incorrent formatted minutes', function() {
        var result = convertDMtoDecimal('N51° 70.322');
        expect(result).to.be.null;
    });
});
'use strict';

var expect = require('chai').expect;
var convert = require('../script');

describe('Convert DM to Decimal', function() {

    it('should convert northern coordinates correctly', function() {
        var result = convert.convertDMtoDecimal('N51° 25.322');
        expect(result).to.equal(51.42203333333333);
    });

    it('should convert eastern coordinates correctly', function() {
        var result = convert.convertDMtoDecimal('E007° 00.165');
        expect(result).to.equal(7.00275);
    });

    it('should convert western coordinates correctly', function() {
        var result = convert.convertDMtoDecimal('W007° 00.165');
        expect(result).to.equal(-7.00275);
    });

    it('should convert southern coordinates correctly', function() {
        var result = convert.convertDMtoDecimal('S51° 25.322');
        expect(result).to.equal(-51.42203333333333);
    });

    it('should return null on incorrent formatted degrees', function() {
        var result = convert.convertDMtoDecimal('W230° 25.322');
        expect(result).to.be.null;
    });

    it('should return null on incorrent formatted minutes', function() {
        var result = convert.convertDMtoDecimal('N51° 70.322');
        expect(result).to.be.null;
    });
});

describe('Convert Decimal Latitude to DM', function() {

    it('should convert northern lat correctly', function() {
        var result = convert.convertDecimaltoDMLat(51);
        expect(result).to.equal('N51° 00.000');
    });

    it('should convert southern lat correctly', function() {
        var result = convert.convertDecimaltoDMLat(-51);
        expect(result).to.equal('S51° 00.000');
    });

    it('should return null on too low values', function() {
        var result = convert.convertDecimaltoDMLat(-100);
        expect(result).to.be.null;
    });

    it('should return null on too high values', function() {
        var result = convert.convertDecimaltoDMLat(100);
        expect(result).to.be.null;
    });

    it('should convert coordinates correctly', function() {
        var result = convert.convertDecimaltoDMLat(43.63871944444445);
        expect(result).to.be.equal('N43° 38.323');
    });

    it('should convert coordinates correctly', function() {
        var result = convert.convertDecimaltoDMLat(7);
        expect(result).to.be.equal('N07° 00.000');
    });
});

describe('Convert Decimal Longitude to DM', function() {
    
        it('should convert eastern lat correctly', function() {
            var result = convert.convertDecimaltoDMLng(7);
            expect(result).to.equal('E007° 00.000');
        });
    
        it('should convert western lat correctly', function() {
            var result = convert.convertDecimaltoDMLng(-7);
            expect(result).to.equal('W007° 00.000');
        });
    
        it('should return null on too low values', function() {
            var result = convert.convertDecimaltoDMLng(-190);
            expect(result).to.be.null;
        });
    
        it('should return null on too high values', function() {
            var result = convert.convertDecimaltoDMLng(190);
            expect(result).to.be.null;
        });
    
        it('should convert coordinates correctly', function() {
            var result = convert.convertDecimaltoDMLng(43.63871944444445);
            expect(result).to.be.equal('E043° 38.323');
        })
    });
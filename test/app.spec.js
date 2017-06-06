'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
});

describe('isItMario?', function (){
    it('not capital -> capital. mario -> Mario', function ()    {
        expect(app.itsAMeMario('mario')).to.eql('Mario');
    });
    it('not capital -> not capital. luigi -> luigi', function ()    {
        expect(app.itsAMeMario('luigi')).to.eql('luigi');
    });
    it('capital -> capital. Mario -> Mario', function ()    {
        expect(app.itsAMeMario('Mario')).to.eql('Mario');
    });
});
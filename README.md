coord-convert-dm-decimal
=========

[![Build Status](https://travis-ci.org/tbinte/coord-convert.svg?branch=v0.0.1)](https://travis-ci.org/tbinte/coord-convert)

A small library that convert one part of geographical coordinates from degree minutes format to decimal format and vice versa. More conversions to follow.


## Installation

  `npm install coord-convert`

## Usage

  ### import
  var convert = require('../script');

  ### from DM to decimal 
  var convertedCoordinates = convert.convertDMtoDecimal('E007° 00.165');

  ### from decimal latitude to DM
  var convertedCoordinates = convert.convertDecimaltoDMLat(51.23485834);
  
  ### from decimal longitude to DM
  var convertedCoordinates = convert.convertDecimaltoDMLng(7.445273);

  ## Example Input values:
  * `E007° 00.165`
  * `N51° 25.322`
  * `W013° 05.258`
  * `S050° 23.748`
  * `51.23485834`
  * `7.445273`

  Returns `null` if coordinate is not properly formatted.


## Tests

  `npm test`

## Changelog

### 1.0.0
Added Decimal to DM functions

### 0.0.1
Implemented convert from DM to Decimal

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

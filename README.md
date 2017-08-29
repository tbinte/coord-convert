coord-convert-dm-decimal
=========

A small library that convert geographical coordinates from degree minutes format to decimal format.


## Installation

  `npm install coord-convert`

## Usage

    var convertDMtoDecimal = require('../script');

    var convertedCoordinates = convertDMtoDecimal('E007° 00.165');
  
  
  Output should be `7.00275`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

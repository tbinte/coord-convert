coord-convert-dm-decimal
=========

A small library that convert one part of geographical coordinates from degree minutes format to decimal format.


## Installation

  `npm install coord-convert`

## Usage

    var convertDMtoDecimal = require('../script');

    var convertedCoordinates = convertDMtoDecimal('E007° 00.165');
  
  
  Output should be `7.00275`

  Example Input values:
  * `E007° 00.165`
  * `N51° 25.322`
  * `W013° 05.258`
  * `S050° 23.748`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

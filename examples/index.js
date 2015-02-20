'use strict';

var isDate = require( './../lib' );

console.log( isDate( new Date() ) );
// returns true

console.log( isDate( Date.now() ) );
// returns false
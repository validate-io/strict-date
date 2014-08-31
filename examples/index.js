var isDate = require( './../lib' );

console.log( isDate( new Date() ) );
// Returns true

console.log( isDate( Date.now() ) );
// Returns false
/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isDate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-strict-date', function tests() {

	it( 'should export a function', function test() {
		expect( isDate ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isDate( new Date() ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			[],
			'5',
			function(){},
			null,
			NaN,
			{},
			undefined,
			Date.now()
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isDate( values[i] ) );
		}
	});

});

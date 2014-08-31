/**
*
*	VALIDATE: strict-date
*
*
*	DESCRIPTION:
*		- Validates if a value is a Date object.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isDate( value )
	*	Validates if a value is a Date object.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a Date object
	*/
	function isDate( value ) {
		return ( value instanceof Date );
	} // end FUNCTION isDate()


	// EXPORTS //

	module.exports = isDate;

})();
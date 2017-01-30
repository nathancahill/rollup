define(function () { 'use strict';

	/* rollup-tree-shake pure */
	const cube = {};
	const square = () => {};


	cube.a = 'a';
	square.b = 'b';

	console.log( cube, square );

});

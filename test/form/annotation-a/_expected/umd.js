(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	/* rollup-tree-shake pure */
	const cube = {};
	const square = () => {};


	cube.a = 'a';
	square.b = 'b';

	console.log( cube, square );

})));

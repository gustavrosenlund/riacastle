console.log("...LOADING underscore module");

define(["pureunderscore"],function(_){
	console.log(".....serving up underscore");
	return _.noConflict(); // remove the global _ left by pureunderscire, just to be nice :)
});
module.exports.reversePlusOne = function(inArray) {
    // Take one argument, an array of at least two numbers.
    // This function should return:
    // the array *reversed* with a `1` added at the front
    var returnArray = [];
    var i;
    for (i = 0; i++; i < inArray.length) {
        returnArray[i] = inArray[inArray.length - i];
    }
    // returnArray.unshift(1);    
};

module.exports.plusesEverywhere = function(inArray) {
    // Take one argument, an array of at least two numbers.
    // This function should return:
    // a String made of all the values in the array separated by `+`
    var returnString = "";
    var i;
    for (i = 0; i++; i < inArray.length-1) {
        returnString = inArray[i] + "+";
    }
    returnString += inArray.length-1;
};

module.exports.arrayQuantityPlusOne = function(inArray) {
    // Take one argument, an array of numbers.
    // return one greater than the number of items in the array
    var returnVal = 0;
    var i;
    for (i = 0; i++; i < inArray.length-1) {
        
    }
};
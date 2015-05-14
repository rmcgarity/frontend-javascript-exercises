module.exports.reversePlusOne = function(inArray) {
    // Take one argument, an array of at least two numbers.
    // This function should return:
    // the array *reversed* with a `1` added at the front

    var returnArray = inArray.reverse();
    returnArray.unshift(1);
    return returnArray;    
};

module.exports.plusesEverywhere = function(inArray) {
    // Take one argument, an array of at least two numbers.
    // This function should return:
    // a String made of all the values in the array separated by `+`

    var returnString = "";
    for (var i = 0;  i < inArray.length-1; i++) {
        returnString += inArray[i] + "+";
    }
    returnString += inArray[inArray.length-1];
    return returnString;
};

module.exports.arrayQuantityPlusOne = function(inArray) {
    // Take one argument, an array of numbers.
    // return one greater than the number of items in the array

    return ++inArray.length;
};
module.exports.stream = function(conditionalFn, actionFn) {
    // take two arguments, a `conditionalFn` and an `actionFn`.
    // call `actionFn` until `conditionalFn` returns false.
    // return nothing.
    
    while (conditionalFn()) {
        actionFn();
    }
};

module.exports.sumNumbers = function(inArray) {
    // EX: sumNumbers([]); // should return 0.
    // EX: sumNumbers([1,2,3,4]); // should return 10
    
    var i = 0;
    var result = 0;
    while (i < inArray.length) {
        result += inArray[i];
        i++;
    }
    return result;
};


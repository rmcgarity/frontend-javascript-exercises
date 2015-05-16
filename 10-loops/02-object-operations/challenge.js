module.exports.copy = function(inObject) {
    // EX: copy({name: "Rob"}) 
    // returns a new object {name: "Rob"}
    var returnObject = {};
    for  (var property in inObject) {
        returnObject[property] = inObject[property];
    }
    return returnObject;
};

module.exports.extend = function(dest, src) {
    // EX: extend({name: "Rob"}, {age: 101}) 
    // should modify and return `dest` with content of {name: "Rob", age: 101}
    for  (var property in src) {
        dest[property] = src[property];
    }
    return dest;
};

module.exports.hasElems = function(inObject, inArray) {
    // return `true` when all of the elements in the array are keys in the object, false otherwise
    
    // Note: I could refactor to avoid using the result variable, by 
    // simply returning false inside the loop and returning true below it.
    // But I prefer to have one return point from a function, when possible.
    
    var result = true;
    for (var i=0; i < inArray.length; i++) {
        if (!(inArray[i] in inObject)) {
            result = false;
            break;
        }
    }
    return result;
};
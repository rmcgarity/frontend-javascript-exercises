module.exports.getKeys = function(inObject) {
    // return an array of each of the keys in the object
    
    return Object.keys(inObject);
};

module.exports.getValues = function(inObject) {
    // return an array of each of the values in the object
    
    var returnArray = [];
    for (property in inObject) {
        returnArray.push(inObject[property]);
    }
    return returnArray;
};

module.exports.objectToArray = function(inObject) {
    // objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]
    var returnArray = [];
    for (property in inObject) {
        returnArray.push(property + " is " + inObject[property]);
    }
    return returnArray;
};
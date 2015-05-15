module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
    // Return an object that has each property assigned its proper value
    // EX: createCourse('Bloc Front-End Engineering', '4 weeks', ['Joe', 'Tim', 'Rob'])

    returnObject = {
        title: courseTitle, 
        duration: courseDuration,
        students: courseStudents
    };
    return returnObject;
};

module.exports.addProperty = function(object, newProp, newValue) {
    // EX: addProperty({}, 'firstName', 'Jim') // should return { firstName: 'Jim' }
    // EX: addProperty({firstName: 'Rob'}, 'firstName', 'Jim') // should return {firstName: 'Rob'}
    
    if (!(newProp in object)) {
        object[newProp] = newValue;
    }
    return object;
};

module.exports.formLetter = function(letter) {
    // EX: formLetter({ recipient: "James", sender: "Richard", msg: "Things are well." }) 
    // should return "Hello James,\n\nThings are well.\n\nSincerely,\nRichard"
    
    return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
    // return `true` if a user can afford a given item according to the price chart below, and false otherwise:
    //   - 'MacBook Air' - $999
    //   - MacBook Pro' - $1299
    //   - 'Mac Pro' - $2499
    //   - 'Apple Sticker' - $1
    // Return `false` if the `item` is not in the above list of Apple products
    // Do this with 0 'if' conditions!
    
    var priceList = {
        "MacBook Air" : 999,
        "MacBook Pro" : 1299,
        "Mac Pro" : 2499,
        "Apple Sticker" : 1
    }
    return (item in priceList) && (priceList[item] <= money);
};
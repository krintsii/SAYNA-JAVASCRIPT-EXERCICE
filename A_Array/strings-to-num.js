



function stringsToNum(value) {
    let elements = [];
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        elements.push(element.length)
    }
    
    return elements;
};

console.log(stringsToNum([ "orange", "game", "movie","beau"])) ; // [6, 4, 5, 9]
console.log(stringsToNum(["he", "off", "handmade"])) ; // [2, 3, 8]
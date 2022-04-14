function isLong (value){
    if (value.length > 5 ){
        return true;
    } else {
        return false
    }
        
}

console.log(isLong("pie")) ; // false
console.log(isLong("kite")) ; // false
console.log(isLong("kitty")) ; // false
console.log(isLong("telescope")) ; // true
console.log(isLong("thermomètre")) ; // true
console.log(isLong("restaurant")) ; // true
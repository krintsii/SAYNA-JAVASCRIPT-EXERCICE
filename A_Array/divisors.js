
function divisors(value) {
    let elements = [];
    for (let i = 1; i<=value; i++) {
        const element = value % i;
        if(element === 0){
            elements.push(i)
        }
        
    }
    return elements;
}


console.log(divisors(15)) ; // [1, 3, 5, 15].
console.log(divisors(7)) ; // [1, 7] (en anglais)
console.log(divisors(24)) ; // [1, 2, 3, 4, 6, 8, 12, 24]
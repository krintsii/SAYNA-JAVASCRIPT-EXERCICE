function crazySum(num1, num2){
    let identik = 0
    if (num1 === num2){
        identik = (num1+num2)*3;
    }
    return identik
}

let a = 5
let b = 5
console.log(crazySum(a, b));
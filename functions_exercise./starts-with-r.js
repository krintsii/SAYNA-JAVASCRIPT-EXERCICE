function startsWithR(params) {
    return params.startsWith("r" || "R", 0)
};


console.log(startsWithR("roger that")) ; // vrai
console.log(startsWithR("Row, row, row your boat")) ; // true
console.log(startsWithR("slip")) ; // false
console.log(startsWithR("Taxicab")) ; // false